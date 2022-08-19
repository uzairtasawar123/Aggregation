const mongoose = require('mongoose')

const uniSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    location:{
        type:String,

    },
    status:{
        type:String,
    }
})

const University = new mongoose.model('universities',  uniSchema)
module.exports = University