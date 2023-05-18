
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User =new Schema({
   
    
    email:{type:String , maxLength:255},
    pass:{type:String , maxLength:30},
    
})
module.exports = mongoose.model('Users',User);