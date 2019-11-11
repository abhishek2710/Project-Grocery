const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    itemid: {
        type: String,
        required: 'This field is required.'
    },
    itemname: {
        type: String,
        required: 'This field is required.'
    },
    qty: {
        type: Number
    },
    sellingprice: {
        type: String
    },
    costprice: {
        type: String
    },
    GST: {
        type: String
    },
    supplierid: {
        type: String
    }
    
});

// Custom validation for email


mongoose.model('Employee', employeeSchema);