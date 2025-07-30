const connection = require('../../base'); // Importa usando CommonJS
const oracledb = require('oracledb');

module.exports.login = async (req, res) => {
       
const {username,password}=req.body;
const consult = 'select * from client where name = :username and password = :password'; 
try{

    const conn = await connection();
    const result = await conn.execute(consult, [username, password], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    
    if (result.rows.length > 0) {
        console.log('Datos del usuario:', result.rows[0]);

        res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } else {
       
        res.status(401).json({ message: 'Invalid username or password' });
    }
    
    await conn.close();
}catch(error){
 console.error('Error al intentar loguear:', error);
}

}