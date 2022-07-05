var express = require('express');
var router = express.Router();



//router.post('/create',(req,res)=>{
    //req.session.user = req.body.Yname;
    //console.log(req.session.user);
    //res.redirect('/route/dashboard');
    //res.send("Login successful");
//})

//route for Dashboard


router.post('/dashboard',(req,res)=>{
    var Yname = req.body.Yname;
    var Fname = req.body.Fname;
    res.render('dashboard.ejs',{form_name:Yname,friend:Fname});

})

router.post('/preview',(req,res)=>{
    //var Yname = req.body.Yname;
    //var Fname = req.body.Fname;
    var Y = req.body.Yname;
    var F = req.body.Fname;
    res.render('preview.ejs',{form_name:Y,friend:F});
    //res.send("Login successful");
    

})

router.post('/message',(req,res)=>{
    
    //res.render('preview.ejs',{form_name:Yname,friend:Fname});
   // alert("Wish sent successful");
   //res.render('previewall.ejs',);
   //res.send("Login successful");
   //popup.alert({
    //content:'Mail sent successfully'
   //});
   //let alert = require('alert'); 
//alert("message")


})
module.exports = router;