const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: true }));
const Student = require('../models/ecard')
// get students
router.get('/',async (req, res) => { 
        try {
            const students = await Student.find()
            res.json(students)
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
}) 

// get student with given rollno
 
router.get('/:rollno', (req, res) => {
    res.send(req.params.rollno)
})

// creating or posting in model student
router.post('/',async (req, res) => {
    const student = new Student({
        rollno: req.body.rollno,
        name: req.body.name,
        mobile: req.body.mobile,
        salary: req.body.salary
    })
    try {
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    } catch (error) {
      res.status(400).json({message: error.message})   
    }
    

})

// student update
router.patch('/:rollno', (req, res) => {

})

// student delete
router.delete('/:rollno', (req, res) => {


})













module.exports = router