
const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.set('view engine','ejs');
const port = process.env.PORT ||  3000
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))

app.use(express.static("public"));

app.get("/",function(req, res){
    res.render("index");
});

app.get("/login",function(req, res){
  res.render("login");
});

app.get("/register",function(req, res){
  res.render("register");
});

app.get("/tables",function(req, res){
  res.render("tables");
});

app.get("/charts",function(req, res){
  res.render("charts");
});

app.get("/forms",function(req, res){
  res.render("forms");
});

app.listen(port, function(){
    console.log("Server is running");
  });