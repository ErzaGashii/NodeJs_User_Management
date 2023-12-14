const Customer = require('../models/Customer');
const mongoose = require('mongoose');

exports.homepage = async (req,res) =>{
   const messages = await req.customerFlash('info');
    const locals ={
        title: 'NodeJs',
        description: 'NodeJs User Management System'
    }
    try {
                             //limiti se sa customer kemi mi marr -22
        const customers = await Customer.find({}).limit(22)
        
        res.render('index', {locals, messages,customers});

    } catch (error) {
        console.log(error);
    }
}

//Get New Customer 
exports.addCustomer = async (req,res) =>{
 
    const locals ={
        title: 'Add New Customer',
        description: 'NodeJs User Management System'
    }
    res.render('customer/add', locals);
}


//POST - Created New Customer
exports.postCustomer = async (req,res) =>{
     console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    });
 
try {
    await Customer.create(newCustomer);
 
    await req.flash('info', 'New customer has been added.')

    res.render('index');
} catch (error) {
    console.log(error);
}

}