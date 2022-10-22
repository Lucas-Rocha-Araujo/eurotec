require('dotenv').config();
const nodemailer = require("nodemailer");

const ContatoController = {
  viewForm: (req, res) => {
    return res.render("contato", { title: "Contato" });
  },
  sendForm: async (req, res) => {
    let transporter = nodemailer.createTransport({
          host: process.env.HOST_MAIL,
          port: process.env.HOST_PORT,
          secure: false, // true for 465, false for other ports
          auth: {
          user: process.env.HOST_USER, // generated ethereal user
          pass: process.env.HOST_PASS, // generated ethereal password
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
    });
    
    let {subject, email, context} = req.body;
    if (!subject|| !email || !context) {
      return res.render("contato", { title: "Contato", error: { message: "Preencha todos os campos" }, });
    } else{
      let info = await transporter.sendMail({
        from: req.body.email,
        to: process.env.HOST_USER,
        subject: req.body.subject,
        text: req.body.context,
        
        });
        
        console.log("Message sent: %s", info.messageId);
  
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        return res.redirect('/sucesso');
      }
  },

  sucesso: (req, res) => {
    res.render('sucesso', { title: "Contato" });
  },
};

module.exports = ContatoController;