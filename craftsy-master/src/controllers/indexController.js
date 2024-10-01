const path = require ('path')

module.exports = {
    index : (req, res) => {
        return res.render('home')
    },
    admin : (req, res) => {
        return res.render('admin')
    }
}