
const path = require('path')


module.exports = {

list : (req, res) => {
return res.sendFile(path.join(__dirname, '..', 'views', 'home.html'))
},




admin : (req, res) => {

}
}