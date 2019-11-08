const  express =require("express");
const path=require('path');
const app = express();
//load view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug');
app.get('/',function(req, res){
   // res.send("hello");
    res.render('index');

});
//app.get('/',function(req, res){
app.get('/items',function(req, res){
    let items= [
        {
            Item_Id:'It1',
            Item_Name:'Book',
            Cost_Price:50,
            Selling_Price:60,
            Quantity:8,
            Expiry:"Null"

        },
        {
            Item_Id:'It98',
            Item_Name:'Pen',
            Cost_Price:5,
            Selling_Price:6,
            Quantity:28,
            Expiry:"Null"

        },
        {
            Item_Id:'It71',
            Item_Name:'Apple',
            Cost_Price:150,
            Selling_Price:160,
            Quantity:18,
            Expiry:2019-12-12

        },
        {
            Item_Id:'It99',
            Item_Name:'Box',
            Cost_Price:10,
            Selling_Price:20,
            Quantity:18,
            Expiry:"Null"

        }
    ];
     res.render('items',{
         title:"Display Items",
         items:items
     });
 
 });
 /*.get('/items/add',function(req, res){
    // res.send("hello");
     res.render('items',{
        title:'Add'
     });
 
 });*/
app.listen(3000,function(){
    console.log('server started on port 3000..');
});