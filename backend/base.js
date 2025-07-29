const oracledb = require("oracledb"); //Llamamos la libreria
oracledb.initOracleClient(); //Iniciamos thick mode para poder usar oracle 11g

const iniciarConection = async () => {
try {
  const connection = await oracledb.getConnection({
    user: "PROYECTO",
    password: "PROYECTO",
    connectString: "localhost/XE",
  });

  //await connection.execute(`create or replace table todoitem ( id number, description varchar2(4000), creation_ts timestamp with time zone default current_timestamp, done number(1,0), primary key (id))`);

  /*const sql = "INSERT INTO TODOITEM (id,description,done ) VALUES (:1,:2,:3)";
  const rows = [[3,"Alimento",2], [4,"Perro",3]];
  let resultInsert = await connection.executeMany(sql,rows)
    console.log("Rows inserted:", resultInsert.rowsAffected);
    await connection.commit();*/
  const result = await connection.execute(`SELECT * FROM todoitem`,[],{outFormat: oracledb.OUT_FORMAT_OBJECT});
  console.log("Result is:", result.rows[0].description);
  console.log("Conectado");
  
  return connection;
} catch (error) {
  console.log("no se pudo ", error);
}}

iniciarConection()