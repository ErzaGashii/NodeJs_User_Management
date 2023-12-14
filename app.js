require('dotenv').config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
//const { flash } = require('express-flash-message');
//const flash = require('express-flash-message');
const flash = require('express-flash');

const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 5000;
// Connect to Database  
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Staic files
app.use(express.static('public'));

//Express Session
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000*60*60*24*7 , //1 week
        }
    })
    )

    //Flash Message
    app.use(flash({ sessionKeyName: 'flashMessage' }));
    //app.use(flash());



//Templating Engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

//Routes
app.use('/', require('./server/routes/customer'))

// //Home
// app.get('/', (req, res) => {
//     const locals ={
//         title: 'NodeJs',
//         description: 'Free NodeJs User Management System'
//     }
//     res.render('index', locals);
// });

//Handle 404
app.get('*', (req,res) => {
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log(`App listing in port ${port}`)
});