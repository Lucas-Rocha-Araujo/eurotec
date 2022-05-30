var express = require('express');
var router = express.Router();
var SobreController = require('../controllers/SobreController');


router.get('/', SobreController.index);

module.exports = router;