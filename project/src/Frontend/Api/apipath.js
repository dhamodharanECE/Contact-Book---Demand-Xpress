
// Node.js
// const data = require('http');
// const app = data.createServer((req,res)=>{
//     res.setHeader('Content-type','text/html')
//     res.write('<html>')
//     res.write('<header><title>Hello Server!!!</title></header>')
//     res.write('<body><h1>Hello Node.Js</h1></body>')
//     res.write('</html>')
//     res.write('<h1>I am DHAMODHARAN S</h1>')
//     res.end();
//     process.exit();
// })
// app.listen(4000);

// Express js
// const express = require('express');
// const exp = express();
// const bodypaser = require('body-parser');

// exp.use(bodypaser.urlencoded()); // string data converted in cmd

// exp.use('/login',(req,res,next)=>{
//     res.send('<h1>Login Page</h1><form action="/register" method="POST"><input type="text" name="Username" placeholder="Enter Username"/> <button type="submit">Register</button></form>');
//     next();
// })

// exp.use('/register',(req,res,next)=>{
//    console.log('Form Data Submitted:', req.body);
//    res.send('<h1>Registration Successful</h1>')
// });

// exp.listen(3000);

// conect to mongodb

const express = require('express');
const exp = express();
const bodyparse = require('body-parser');
const exphandle = require('express-handlebars');
const data = require('./db');

exp.engine('hbs',exphandle.engine({layoutsDir:'views/',defaultLayout:'main',extname:'hbs'}));
exp.set('view engine','hbs');
exp.set('views','views');
exp.use(bodyparse.urlencoded({extended:false}));

exp.get('/',async (req,res)=>{
    let database = await data.getDatabase();
    const user = database.collection('users');
    const curser = user.find();
    const userdetails = await curser.toArray();
    console.log('User Details:', userdetails);

    let message = "";
    if (req.query.status === 'success') {
        message = "User Added Successfully";
    } else if (req.query.status === 'fail') {
        message = "Not Successfully";
    }

    res.render('main',{message, userdetails});
})

exp.post('/create',async (req,res)=>{   
    let database = await data.getDatabase();
    const user = database.collection('users');
    let book = {name:req.body.name, email:req.body.email, phone:req.body.phone};
    await user.insertOne(book);
    return res.redirect('/?status= success');
});

exp.listen(3000,()=>{
    console.log('Server started at port 3000');
});











