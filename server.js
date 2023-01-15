const { error } = require('console');
const express = require('express');
const { Db } = require('mongodb');
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;

const url ="mongodb+srv://Ppapadakis001:ppapadakis00@cluster0.w9qalhf.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery',false);

async function connect(){
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB!!!")
    } catch(error){
        console.error(error);
    }
}

connect();
var db = mongoose.connection;

app.set('view engine','ejs');
app.use('/',express.static(__dirname + '/public'));

app.post("/signup",(req,res)=>{
    var email = req.body.email
    var password = req.body.password

    var data = {
        "email":email,
        "password":password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully!!");
        return res.redirect('index.ejs')
    })
})

app.get('/',(req,res) =>{
    res.render('index')
})
app.listen(PORT)
