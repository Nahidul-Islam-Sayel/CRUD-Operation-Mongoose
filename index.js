const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Todohandler = require('./Routehandler/Todohandler')
app.use(express.json());

// data base connect with mongoose
mongoose.connect('mongodb+srv://sametakbo:sametakbo@cluster0.d8lte.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>{
    console.log('connection sucessuful')
})
.catch(err=>console.log(err))


app.use('/todo', Todohandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})