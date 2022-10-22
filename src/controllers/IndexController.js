const IndexController = {
    index: (req, res) => {
        return res.render("index", { title: "Eurotec"});
    },
    galery: (req, res) => {
        return res.render("galeria", { title: "Galeria"});
    },
    about: (req, res) => {
        return res.render("sobre", { title: "Sobre"});
    },
};

module.exports = IndexController;