const express = require('express');

const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const router = require('./router');
const app = express();

const port = process.env.PORT||3000;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs');

//load static assets

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/static',express.static(path.join(__dirname,'public/assets')));

app.use('/route',router);

//home route
app.get('/',(req,res)=>{
    res.render('base');

})

app.get('/route',(req,res)=>{
   res.render('route/preview');

})

//app.get('/route',(req,res)=>{
   // res.render('route/previewall');

//})


app.listen(port,()=>{ console.log("Listening to the server on http://localhost:${port}")});