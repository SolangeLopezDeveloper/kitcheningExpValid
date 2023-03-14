var express = require('express');
var router = express.Router();

/* GET users listing. */
const{register,login,profile,processLogin,processRegister, processUpdate}= require('../controllers/userController');
const {loginUserValidator, registerUserValidator} = require('../validations');

/* /users */
router.get('/register', register)
router.post('/register',registerUserValidator, processRegister)
router.get('/login', login)
router.post('/login', loginUserValidator, processLogin)
router.get('/profile', profile)
router.put('/update', processUpdate)
module.exports = router;
