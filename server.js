const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const { users } = require('./data')
const { managers } = require('./data')
const { userinfo } = require('./data')

// console.log(users);
Object.keys(users).forEach(key => console.log(users[key]));
const app = express()
app.set('view engine','ejs')
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))

flag = false
// login
app.get('/login', (req, res) => res.render("login"))
app.post('/login',(req,res)=>{
  console.log(req.body.email);
  console.log(req.body.password);
  for (var user of users) {
    if(user.email==req.body.email && user.password==req.body.password){
      flag=true
      if(user.role=='basic'){
        res.redirect("userhome")
      }
      else if(user.role=='chairman'){
        res.redirect("chairmanhome")
      }else{
        console.log("logined as manager");
        res.redirect("chairmanhome")
      }
    }
}
res.render("login")
  
})


// register new user
app.get('/register', (req,res)=>{
  res.render("register")
})
app.post('/register',(req,res)=>{
  console.log(req.body.newemail);
  console.log(req.body.newusername);
  console.log(req.body.newpassword);
  user = {}
  user.id = uuidv4();
  user.name=req.body.newusername
  user.email=req.body.newemail
  user.password=req.body.newpassword
  user.role='basic'
  users.push(user);
  console.log(users);
})


// chairman access
app.get('/chairmanhome', (req, res) =>{ 
  if(flag==false){
    res.redirect("login")
  }else{
    res.render("chairmanhome")
    flag=false
  }
  })

app.post('/chairmanhome', (req,res)=>{
  
  // manager info
  console.log(req.body.mid);
  console.log(req.body.mname);
  console.log(req.body.mexp);
  console.log(req.body.mbranch);
  console.log(req.body.mage);

  // customer info
  console.log(req.body.cid);
  console.log(req.body.cname);
  console.log(req.body.ecard);
  console.log(req.body.cbranch);
  console.log(req.body.csave);
})


// userdetails adding
app.get('/userhome', (req, res) => {
  if(flag==false){
    res.redirect("login")
  }else{
    res.render("userhome")
    flag=false
  }
})
app.post('/userhome',(req,res)=>{
  // customer info
  console.log(req.body.cid);
  console.log(req.body.cname);
  console.log(req.body.ecard);
  console.log(req.body.cbranch);
  console.log(req.body.csave);  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
