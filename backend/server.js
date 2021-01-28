const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({
    path: "./Config/.env"
});
let port = 5000;
const path = require('path');
const questionsRouter = require("./routes/admin/questionsRouter")
const quizzesRouter = require("./routes/admin/quizzesRouter")
// const authRouter = require("./routes/authRouter")
// const usersRoute = require("./routes/admin/users")

app.use(express.json())
app.use("/api/questions", questionsRouter)
app.use("/api/quizzes", quizzesRouter)
// app.use("api/users", usersRoute)
// app.use("/api/auth", authRouter)

// Serve static assets if in production
/*if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
    });
  }*/









// start listening to the server 
// connect to DB 
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("CONNECTED TO DB")
})
app.listen(port, () => console.log(`Hello From http://localhost:${port}`))