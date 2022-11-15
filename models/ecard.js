// student database schema
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    ecard:{
        type: String,
        required: false
    },
    discount:{
        type: String,
        required: false
    },
    age:{
        type: Number,
        required: false
    },
    startdate:{
        type: Date,
        required: false
    },
    enddate:{
        type: Date,
        required: false
    }
})

