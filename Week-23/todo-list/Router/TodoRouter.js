const {
  postTodo,
  getTodos,
  getTodoByID,
  updateTodo,
  deleteById,
} = require("../Controller/TodoController");

const router = require("express").Router();

router.route("/").post(postTodo).get(getTodos);

router.route("/:id").get(getTodoByID).put(updateTodo).delete(deleteById);
module.exports = router;
