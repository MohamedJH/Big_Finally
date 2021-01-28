const express = require('express');
const router = express.Router();
const questions =require("../../Models/question")

router.get('/all',(req,res)=>{
    
    questions.find()
                    .then((result)=>{res.send(result)})
                    .catch((err)=>{res.status(400).send({msg:err})})

});

router.delete('/:questionID',(req,res)=>{
    const id =req.params.questionID
    questions.findByIdAndDelete(id)
                    .then((result)=>{res.send(result)})
                    .catch((err)=>{res.status(400).send({msg:err})})

});

router.put("/:questionID", (req, res) => {
    const questionID = req.params.questionID;
    questions.findByIdAndUpdate(questionID, req.body, { new: true })
      .then((question) => {
        if (!question) {
          return res.status(404).send({ msg: "Question Not Found " });
        }
        res.send(question);
      })
      .catch((err) => res.status(400).send({ msg: "ERROR" }));
});

router.post("/addQuestion", (req, res) => {
  const { category,type,difficulty,question,correct_answer,incorrect_answers} = req.body;
  const newQuest = new questions({ category,type,difficulty,question,correct_answer,incorrect_answers}); // create a new document
  newQuest
    .save()
    .then((question) => res.send(question))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});







module.exports = router