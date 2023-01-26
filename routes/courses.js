const express = require('express');
const router = express.Router();





const{detail, list}= require('../controllers/coursesController')


router.get('/detail/:id', detail );
router.get('/list', list);

module.exports = router;

