const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const todoScheema = require('../Scheema/TodoScheema') 
const Todo  = new mongoose.model("Curd",todoScheema);

// Get all the todo
router.get('/',async(req,res)=>{
        Todo.find({},
        (err,data) => {
            if (err) {
              res.status(500).json({
                error: "There was a server side error!",
              });
            } else {
              res.status(200).json({
                result: data,
                message: "Todo was updated successfully!",
              });
            }
          }
        )
})

// Get a  todo by id
router.get('/:id',async(req,res)=>{
    Todo.find({_id: req.params.id},
        (err,data) => {
            if (err) {
              res.status(500).json({
                error: "There was a server side error!",
              });
            } else {
              res.status(200).json({
                result: data,
                message: "Todo was updated successfully!",
              });
            }
          }
        )
})

// post a  todo
router.post('/',async(req,res)=>{
    const newTodo = new Todo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error: 'There was a error'
            })
        }
        else{
            res.status(200).json({
                message: 'Sucessfully inserted'
            }
            )
        }
    })
    
})

// post multiple todo  todo
router.post('/all',async(req,res)=>{
    await Todo.insertMany(req.body, (err)=>{
        if(err){
            res.status(500).json({
                error: 'There was a error'
            })
        }
        else{
            res.status(200).json({
                message: 'Sucessfully inserted'
            }
            )
        }
    })
})


// PUT TODO
router.put("/:id", async (req, res) => {
    const result =  Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: "active",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            message: "Todo was updated successfully!",
          });
        }
      }
    );
    console.log(result);
  });
  


// Delete a  todo
router.delete('/:id',async(req,res)=>{
    Todo.deleteOne({_id: req.params.id},
        (err) => {
            if (err) {
              res.status(500).json({
                error: "There was a server side error!",
              });
            } else {
              res.status(200).json({
              
                message: "Delete SUccessfully",
              });
            }
          }
        )
})

module.exports = router;