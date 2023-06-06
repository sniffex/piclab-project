const express = require ('express');
const router = express.Router();
const authController = require('../controller/AuthController')

router.get('/register', authController.register);

module.exports= router;