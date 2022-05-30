var express = require('express');
var router = express.Router();
var GaleriaController = require('../controllers/GaleriaController');

router.get('/', GaleriaController.index);

module.exports = router;