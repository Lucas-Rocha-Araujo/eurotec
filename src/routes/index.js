let express = require('express');
let router = express.Router();
let IndexController = require('../controllers/IndexController');

/* GET page */
router.get('/', IndexController.index);
router.get('/galeria', IndexController.galery);
router.get('/sobre', IndexController.about);

module.exports = router;


