import oracledb from "oracledb" 
oracledb.initOracleClient(); //Iniciamos thick mode para poder usar oracle 11g

const iniciarConection = async () => {
try {
  // Configuramos la conexion a la base de datos
  const connection = await oracledb.getConnection({
    user: "PROYECTO", // Usuario de la base de datos
    password: "PROYECTO", // Contraseña de la base de datos
    connectString: "localhost/XE", // Cadena de conexión (localhost/ se muestra en la conexión)
  });

  // Aquí puedes realizar operaciones con la base de datos, como crear tablas, insertar datos, etc.
  // Por ejemplo, crear una tabla de ejemplo:
  /*await connection.execute(`create or replace table todoitem ( id number, description varchar2(4000), creation_ts timestamp with time zone default current_timestamp, done number(1,0), primary key (id))`);

  // Insertar datos de ejemplo en la tabla
  const sql = "INSERT INTO TODOITEM (id,description,done ) VALUES (:1,:2,:3)";

  // Aquí puedes usar executeMany para insertar múltiples filas a la vez
  // Por ejemplo, insertar dos filas:
  const rows = [[3,"Alimento",2], [4,"Perro",3]];

  // Ejecutar la inserción de múltiples filas
  let resultInsert = await connection.executeMany(sql,rows)

  // Confirmar los cambios en la base de datos
    console.log("Rows inserted:", resultInsert.rowsAffected);
    await connection.commit();

  // Consultar los datos de la tabla
  // Aquí puedes usar execute para consultar los datos de la tabla
  const result = await connection.execute(`SELECT * FROM todoitem`,[],{outFormat: oracledb.OUT_FORMAT_OBJECT});
  console.log("Result is:", result.rows[0].description);*/
  
  return connection;
} catch (error) {
  console.log("no se pudo ", error);
}}
export default iniciarConection; // Exportamos la función para que pueda ser utilizada en otros archivos