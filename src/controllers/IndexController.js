const IndexController = {
    index: (req, res) => {
        return res.render("index");
    },
    galery: (req, res) => {
        return res.render("galeria");
    },
    about: (req, res) => {
        return res.render("sobre");
    },
};

module.exports = IndexController;