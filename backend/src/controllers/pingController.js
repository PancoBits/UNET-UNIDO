const connection = require('../../base'); // Importa usando CommonJS

function ping(req, res) {
  const consultar = 'select * from login';

  try {
    connection().then(async (conn) => {
      
      const result = await conn.execute(consultar, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).send("No se encontraron datos");
      }
    });
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    res.status(500).send("Error al consultar la base de datos");
  }
}

module.exports = { ping }; // Exporta usando CommonJS
