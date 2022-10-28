require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT ||  3000
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))


app.use(express.json())

const studentsRouter = require('./routes/students.js')
// all endpoints with students are handled by student.js
app.use('/students', studentsRouter)



app.listen(port, function(){
    console.log("Server is running");
  });