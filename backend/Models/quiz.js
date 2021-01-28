const mongoose = require('mongoose');
const quizSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    Questions:{
        type: [Object],
        required: true
    }
})


module.exports= mongoose.model("quiz",quizSchema,"Quizzes")