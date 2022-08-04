var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

/* GET page */
router.get('/', IndexController.index);
router.get('/galeria', IndexController.galery);
router.get('/sobre', IndexController.about);

module.exports = router;


