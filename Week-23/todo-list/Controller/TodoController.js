const Todo = require("../Model/todomodel");
const HttpStatus = require("http-status-codes");

const postTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = await Todo.create({ todo });
    res.status(HttpStatus.CREATED).json(newTodo);
  } catch (error) {
    console.error("Error inserting todo:", error);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

//get allTodos
const getTodos = async (req, res) => {
  try {
    const result = await Todo.find();
    if (result.length === 0) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: "No Todos Found" });
    }
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//get todo by id
const getTodoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.findById(id);
    if (!result) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: "Todo not found" });
    }
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

//update todo

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todo },
      { new: true }
    );

    res.status(HttpStatus.OK).json(updatedTodo);
  } catch (error) {
    console.log("error", error);
    res.status(HttpStatus.FORBIDDEN).json({ error: "Internal server error" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: "Todo not found" });
    }
    res.status(HttpStatus.OK).json({ deletedTodo, msg: "Todo has been deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
  }
};


module.exports = { getTodoByID, getTodos, postTodo, deleteById, updateTodo };
