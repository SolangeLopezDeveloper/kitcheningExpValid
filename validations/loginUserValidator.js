const { check, body } = require('express-validator');
const{readJSON} = require('../data/')
const {compareSync} = require('bcryptjs')


module.exports = [
    check('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debe ser un email con formato válido'),
    
    check('password')
    .notEmpty().withMessage('La contraseña es obligatoria').bail()
.custom((value,{req}) => {
    let user = readJSON('users.json').find(user.email === req.body.email && compareSync(value, user.password));

    return user
}).withMessage('Credenciales inválidas')
    
]