const express = require('express');
const router = express.Router();
const quizzes =require("../../Models/quiz")

router.get('/all',(req,res)=>{
    
    quizzes.find()
                    .then((result)=>{res.send(result)})
                    .catch((err)=>{res.status(400).send({msg:err})})

});
router.delete('/:quizID',(req,res)=>{
    const id =req.params.quizID
    quizzes.findByIdAndDelete(id)
                    .then((result)=>{res.send(result)})
                    .catch((err)=>{res.status(400).send({msg:err})})

});

router.put("/:quizID", (req, res) => {
    const quizID = req.params.quizID;
    quizzes.findByIdAndUpdate(quizID, req.body, { new: true })
      .then((quiz) => {
        if (!quiz) {
          return res.status(404).send({ msg: "quiz Not Found " });
        }
        res.send(quiz);
      })
      .catch((err) => res.status(400).send({ msg: "ERROR" }));
});


router.post("/addQuiz", (req, res) => {
    const { name,category,Questions} = req.body;
    const newQuiz = new quizzes({name,category,Questions}); // create a new document
    newQuiz
      .save()
      .then((quiz) => res.send(quiz))
      .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
  });
  


module.exports = router