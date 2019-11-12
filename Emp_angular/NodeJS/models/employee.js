const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    empid: { type: String },
    mobile: { type: Number },
    position:{type:String},
    salary: { type: Number }
});

module.exports = { Employee };