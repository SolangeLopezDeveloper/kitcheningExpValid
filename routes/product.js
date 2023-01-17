const express = require('express');
const router = express.Router();
const controller= require('../controllers/indexController')
/* / */

const{detail, list}= require('../controllers/productController')
router.get('/detail', detail );
router.get('/list', list);

module.exports = router;