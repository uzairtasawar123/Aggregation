const mongoose = require('mongoose')

const StuSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    reg:{
        type:Number,

    },
    uni:{
        type:String,
    }
})

const Student = new mongoose.model('students',  StuSchema)
module.exports = Student