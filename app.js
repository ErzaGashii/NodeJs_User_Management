require('dotenv').config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port  = 5000 || process.env.PORT;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Staic files
app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

//Home
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`App listing in port ${port}`)
});