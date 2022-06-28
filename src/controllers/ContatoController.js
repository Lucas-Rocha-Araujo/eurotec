const ContatoController = {
    viewform: (req, res) => {
        return res.render("contato");
    },
    saveform: (req, res) => {
        let {fname, address, email, phone, message} = req.body;
        res.redirect('/contato/sucesso');
    },
    sucesso: (req, res) => {
        res.render('sucesso');
    },
};

module.exports = ContatoController;