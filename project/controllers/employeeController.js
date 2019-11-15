const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const Emp = mongoose.model('Emp');


router.get('/create', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Item"
    });
});
router.get('/', (req, res) => {
    res.render("nn")
        
});
router.get('/bill', (req, res) => {
    res.render("Billling")
        
});
router.get('/admin', (req, res) => {
    res.render("admin")
        
});
router.get('/home1', (req, res) => {
    res.render("home")
        
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});
router.get('/employee', (req, res) => {
    res.render("employee/addemp", {
        viewTitle: "Insert Employee"
    });
});
router.post('/employee', (req, res) => {
    if (req.body._id == '')
        insertemp(req, res);
        else
        updateemp(req, res);
});


function insertRecord(req, res) {
    var employee = new Employee();
    
  // employee.itemid = req.body.itemid;
    employee.itemname = req.body.itemname;
    employee.qty = req.body.qty;
    employee.sellingprice = req.body.sellingprice;
    employee.costprice = req.body.costprice;
    employee.GST = req.body.GST;
    employee.supplierid = req.body.supplierid;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('home/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "Insert Item",
                    employee: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('home/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: 'Update item',
                    employee: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'itemid':
                body['itemidError'] = err.errors[field].message;
                break;
            case 'itemname':
                body['itemnameError'] = err.errors[field].message;
                break;
            case 'qty':
                 body['qtyError'] = err.errors[field].message;
                 break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update item",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/home/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});
function insertemp(req, res) {
    var emp = new Emp();
    emp.emid=req.body.emid;
    emp.fullName = req.body.fullName;
    emp.gender = req.body.gender;
    emp.email = req.body.email;
    emp.mobile = req.body.mobile;
    emp.city = req.body.city;
    
    emp.join = req.body.join;
    emp.desig = req.body.desig;
    emp.salary=req.body.salary;
    emp.save((err, doc) => {
        if (!err)
            res.redirect('/home/employee/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addemp", {
                    viewTitle: "Insert Employee",
                    emp: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateemp(req, res) {
    Emp.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, docs) => {
        if (!err) { res.redirect('/employee/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: 'Update Employee',
                    emp: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/employee/list', (req, res) => {
    Emp.find((err, docs1) => {
        if (!err) {
            res.render("employee/listemp", {
                list1: docs1
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/employee/:id', (req, res) => {
    Emp.findById(req.params.id, (err, docs1) => {
        if (!err) {
            res.render("employee/addemp", {
                viewTitle: "Update Employee",
                emp: docs1
            });
        }
    });
});

router.get('/employee/delete/:id', (req, res) => {
    Emp.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.redirect('/home/employee/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;