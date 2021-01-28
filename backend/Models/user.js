const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique : true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    fullAddress:{
        type: {String},
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    picture:{
        type: String,
        default:""
    },
    addedAt: { 
        type: Date, 
        default: Date.now
    },
    role:{ 
        type: String, 
        default:'player'
    },
    score: {
        type: [{ round: Number, answers: Object }],
        default: [{ round: 0, answers: {} }]
      }
})


module.exports= mongoose.model("user",userSchema,"Users")