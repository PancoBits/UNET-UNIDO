const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/endpoint');
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}))
app.use(express.json());
app.use('/',routes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
