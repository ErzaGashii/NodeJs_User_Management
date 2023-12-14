const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
firstName:{
    type: String,
    require: true
},
lastName: {
    type: String,
    require:true
},

tel:{
    type: String,
    require: true
},
email: {
    type: String,
    require: true
},
details: {
type: String,
require: true
},
createdAt:{
    type: Date,
    default: Date.now()
},
updatedAt:{
    type: Date,
    default: Date.now()

}

});


module.exports = mongoose.model('Customer', customerSchema);