const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    emid:{
        type:String,
        required:'This field is required'
    },
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    gender: {
        type: String
    },
    
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    city: {
        type: String
    
   },
    
    join: {
        type:Date
    },
    desig: {
        type:String
    },
    salary: {
        type:Number
    },
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);