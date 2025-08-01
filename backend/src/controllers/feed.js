const oracledb = require('oracledb');
const iniciarConnection = require('../../base');
const multer = require('multer');
const fs = require("node:fs");

const upload = multer({
  dest: "./uploads",
});

iniciarConnection().then((connection) => {
    global.db = connection;
});

module.exports.getUserId = async (req,res)=>{
    const id = req.params.id
    console.log(id)
    try {
        const row = await db.execute("SELECT * FROM CLIENT WHERE CLIENT_ID=:id",{id: id},{outFormat: oracledb.OUT_FORMAT_OBJECT})
        if(row.rows.length){
            res.json(row.rows[0])
        }else{
            res.json({error: "No se encontró usuario"})
        }
    } catch (error) {
        console.log("Hubo un error:",error)
        res.status(404)
    }
}

module.exports.subirPost = (upload.single("image"), async (req,res) =>{
    const { id, text } = req.body;

    if(req.file){
 const newPath =
      "uploads/" +
      5 +
      "" +
      Date.now() +
      req.file.originalname.replace(/[^a-zA-Z0-9.]/g, "");
    fs.renameSync(req.file.path, newPath);
    }

const getNextIdQuery = 'SELECT NVL(MAX(publication_id), 0) + 1 AS nextId FROM publication';
const resultId = await conn.execute(getNextIdQuery, [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    const nextClientId = resultId.rows[0].NEXTID;
    db.execute("INSERT INTO PUBLICATION (PUBLICATION_ID, CLIENT_ID, TEXT, MULTIMEDIA, COMMENT_ID, REACTIONS_ID) VALUES (:1, :2, :3, :4, :5, :6)", [
        6, 
        nextClientId, 
        text,
        newPath ? newPath : Null,
        1,
        1 
    ])
    db.commit();
    console.log(newPath)
    res.send("Exito")
});

/*app.get("/api/getPost/:id", async (req, res) => {
    const id = req.params.id
    try {
        const row = await db.execute("SELECT * FROM PUBLICATION WHERE PUBLICATION_ID = :id",{id: id},{outFormat: oracledb.OUT_FORMAT_OBJECT});
        res.json(row.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener publicaciones");
    }
});

db.execute("SELECT * FROM CLIENT",[],{outFormat: oracledb.OUT_FORMAT_OBJECT}).then(
    result => console.log(result.rows[0])
).catch(error => console.log(error))
db.close();

app.listen(port, ()=>{
    console.log("Activo en ",port)
});*/