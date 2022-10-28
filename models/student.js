// student database schema
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    rollno:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    salary:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Student',studentSchema)