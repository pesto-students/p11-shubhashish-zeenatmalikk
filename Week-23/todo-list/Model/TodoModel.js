const mongoose = require("mongoose");

const newTodo = new mongoose.Schema({
  todo: {
    type: String,
  },
});



module.exports=mongoose.model('todo',newTodo)