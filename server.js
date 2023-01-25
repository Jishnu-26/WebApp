const express = require('express')
const bodyParser = require('body-parser')
const {users} = require('./data')
const {authUser} = require('./basicauth')
const bcrypt = require('bcrypt')
const app = express()
app.set('view engine','ejs')
const port = 3000

app.get('/login', (req, res) => res.render("login"))
app.get('/register', (req,res)=>{
  res.render("register")
})
app.get('/chairmanhome', (req, res) => res.render("chairmanhome"))
app.get('/userhome', authUser,(req, res) => res.render("userhome"))
app.post('/register', (req, res) => {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    // Store hash in your password DB.
});
})
function setUser(req,res,next){
  const userId = req.body.userId
  if(userId){
    req.user= users.find(user=>user.id === userId)
  }
  next( )
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
