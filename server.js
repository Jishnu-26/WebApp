const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const { users } = require('./data')
const { managers } = require('./data')
const { userinfo } = require('./data');
const { userInfo } = require('os');
// console.log(data.managers.push)
// console.log(users);
Object.keys(users).forEach(key => console.log(users[key]));
const app = express()
app.set('view engine','ejs')
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: true}))
let useremail = ""
flag = false
// login
app.get('/login', (req, res) => res.render("login"))
app.post('/login',(req,res)=>{
  useremail=req.body.email
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
  console.log(users)
  console.log(users);
  res.redirect("login")

})


// chairman access
app.get('/chairmanhome', (req, res) =>{ 
  if(flag==false){
    res.redirect("login")
  }else{
    res.render("chairmanhome",{managers:managers , userinfo:userinfo})
    flag=false
  }
  })

app.post('/chairmanhome', (req,res)=>{
  
  manager = {}
  if(req.body.mname!=null){
  manager.id=uuidv4()
  manager.name=req.body.mname
  manager.exp=req.body.mexp
  manager.age=req.body.mage
  manager.branch=req.body.mbranch
  managers.push(manager)
  console.log(managers);
  }
  // res.render("chairmanhome")


  // customer info
  user = {}
  if(req.body.cname!=null){
  user.id=uuidv4()
  user.name=req.body.cname
  user.ecard=req.body.ecard
  user.totalsave=req.body.csave
  user.branch=req.body.cbranch
  userinfo.push(user)
  }
  
})


// userdetails adding
app.get('/userhome', (req, res) => {
  username = ""
  for (var user in users){
    if (user.email==useremail){
      username=user.name
    }
  }
  var cursession = {email:useremail,name:username}
  if(flag==false){
    res.redirect("login")
  }else{
    res.render("userhome",{cursession:cursession})
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
