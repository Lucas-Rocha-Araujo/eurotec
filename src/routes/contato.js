let express = require('express');
let router = express.Router();
let ContatoController = require('../controllers/ContatoController');
const nodemailer = require("nodemailer");

router.get('/contato', ContatoController.viewForm);
router.post('/contato', ContatoController.sendForm);
router.get('/sucesso', ContatoController.sucesso);
// router.post("/contato", async (req, res) => {
    
//     let transport = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: "davin69@ethereal.email", // generated ethereal user
//           pass: "Qm7wcRdmwt1rhB2hKY", // generated ethereal password
//         },
//     });

//     let message = {
//         from: "foo@example.com", // sender address
//         to: "davin69@ethereal.email", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     };

//     transport.sendMail(message, function (err) {
//         if (err) return res.status(400).json({
//             erro: true,
//             mensagem: "Erro: E-mail nao enviado!"
//         });
//     });

//     return res.json({
//         erro: false,
//         mensagem: "Email enviado com sucesso!"
//     });  
// })

module.exports = router;