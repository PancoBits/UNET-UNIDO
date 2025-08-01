const connection = require('../../base');
const oracledb = require('oracledb');

module.exports.busqueda = async (req, res) => {
  const query = 'SELECT * FROM client ';

  try {
    const conn = await connection();
    const result = await conn.execute(query,[], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    console.log(result)

   

   

    // Verificar contraseña


    // Excluir la contraseña de la respuesta
  
    await conn.close();

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al intentar loguear:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
