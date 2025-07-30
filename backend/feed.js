import oracledb from 'oracledb';
import express from 'express';
import cors from 'cors';
import iniciarConnection from './base.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;

const db = await iniciarConnection();

app.post("/api/sendPost", (req,res) =>{
    const { id, text } = req.body;
    console.log(id,text)
    res.send("Exito")
});


/*db.execute("SELECT * FROM CLIENT",[],{outFormat: oracledb.OUT_FORMAT_OBJECT}).then(
    result => console.log(result.rows[0])
).catch(error => console.log(error))
db.close();*/

app.listen(port, ()=>{
    console.log("Activo en ",port)
});
