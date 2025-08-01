const express = require('express');
const router = express.Router();
const { busqueda } = require('../controllers/busqueda');
const {ping} = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
const { register } = require('../controllers/RegisterController');
const { getUserId, subirPost } = require('../controllers/feed')
router.get('/ping', ping);
router.post('/login',login);
router.post('/register',register);
router.get("/user/:id",getUserId);
router.post("/sendPost",subirPost)
module.exports = router;
