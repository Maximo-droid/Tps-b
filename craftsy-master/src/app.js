const path = require('path');
const express = require('express');
const PORT = 3000;
const indexRoutes = require ('./routes/index.routes');
const productsController = require('./controllers/productsController');
const usersRoutes =  require('./routes/users.routes');

const app = express();




//seteo los recursos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));


//seteo motor de plantilla
app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', usersRoutes);
app.use('/products', productsController.detail);


app.get('/', indexRoutes);




app.get('login.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','login.html')));
app.get('products.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','products.html')));
app.get('register.html', (req,res) => res.sendFile(path.join(__dirname, '..', 'views','register.html')));


app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT));
