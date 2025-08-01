const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const iniciarConnection = require('./base.js');
const multer = require('multer');
const fs = require("node:fs");

const upload = multer({
  dest: "./uploads",
});

const app = express();
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;

iniciarConnection().then((connection) => {
    global.db = connection;
});

app.post("/api/sendPost", upload.single("image"), (req,res) =>{
    const { text } = req.body;

const newPath =
      "uploads/" +
      5 +
      "" +
      Date.now() +
      req.file.originalname.replace(/[^a-zA-Z0-9.]/g, "");
    fs.renameSync(req.file.path, newPath);
    db.execute("INSERT INTO PUBLICATION (PUBLICATION_ID, CLIENT_ID, TEXT, MULTIMEDIA, COMMENT_ID, REACTIONS_ID) VALUES (:1, :2, :3, :4, :5, :6)", [
        5, 
        1, 
        text,
        newPath,
        1,
        1 
    ])
    db.commit();
    console.log(newPath)
    res.send("Exito")
});

app.get("/api/getPost/:id", async (req, res) => {
    const id = req.params.id
    try {
        const row = await db.execute("SELECT * FROM PUBLICATION WHERE PUBLICATION_ID = :id",{id: id},{outFormat: oracledb.OUT_FORMAT_OBJECT});
        res.json(row.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener publicaciones");
    }
});

/*db.execute("SELECT * FROM CLIENT",[],{outFormat: oracledb.OUT_FORMAT_OBJECT}).then(
    result => console.log(result.rows[0])
).catch(error => console.log(error))
db.close();*/

app.listen(port, ()=>{
    console.log("Activo en ",port)
});
