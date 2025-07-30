const connection = require('../../base'); // Importa usando CommonJS
const oracledb = require('oracledb');

module.exports.login = async (req, res) => {
       
const { username, password } = req.body;
const consult = 'select * from client where email = :email'; 
try {
    console.log(username, password);
    const conn = await connection();
    const result = await conn.execute(consult, [username], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    console.log(result.rows);
    if (result.rows.length > 0) {
        // Compare hashed password here if needed
        const user = result.rows[0];
        // If you use bcrypt:
        // const bcrypt = require('bcrypt');
        // const match = await bcrypt.compare(password, user.PASSWORD);
        // if (match) {
        //     res.status(200).json({ message: 'Login successful', user });
        // } else {
        //     res.status(401).json({ message: 'Invalid username or password' });
        // }
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