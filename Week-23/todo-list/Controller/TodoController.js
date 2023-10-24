const Todo = require("../Model/TodoModel");
exports.postTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error inserting todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//get aallTodos
exports.getTodos = async (req, res) => {
  try {
    const result = await Todo.find();
    if(result.length==0){
        res.status(404).json({msg:'No Todos Found'})
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("error", error);
  }
};

//get todo by id
exports.getTodoByID = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Todo.findById(id);
    console.log("result id", result);
    res.status(201).json(result);
  } catch (error) {
    console.error("error");
  }
};

//update todo

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { todo } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todo },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ error: "Internal server error" });
  }
};

exports.deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id, { deleted: true });
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({deletedTodo,msg:"Todo has been deleted"});

  } catch (error) {
    console.log("error", error);
  }
};
