const {
  postTodo,
  getTodos,
  getTodoByID,
  updateTodo,
  deleteById,
} = require("../Controller/TodoController");

const router = require("express").Router();

router.route("/").post(postTodo);
router.route("/").get(getTodos);
router.route("/:id").get(getTodoByID);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteById);
module.exports = router;
