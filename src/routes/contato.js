var express = require('express');
var router = express.Router();
var ContatoController = require('../controllers/ContatoController');

router.get('/', ContatoController.viewform);
router.post('/', ContatoController.saveform);
router.get('/sucesso', ContatoController.sucesso);

module.exports = router;