import { useEffect, useState } from "react";
import styles from "./AddTodo.module.less";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const getTodo = async () => {
    try {
      const data = await axios.get(apiUrl);
      setAllTodos(data.data);
    } catch (error) {
      console.error("Error getting todos:", error);
    }
  };

  const handleAddOrUpdate = async () => {
    try {
      if (todoToUpdate) {
        await axios.put(`${apiUrl}/${todoToUpdate._id}`, {
          todo,
        });
        setTodoToUpdate(null); 
      } else {
        await axios.post(apiUrl, {
          todo,
        });
      }
      console.log("Todo added/updated successfully!");
      getTodo();
      setTodo("");
    } catch (error) {
      console.error("Error adding/updating todo:", error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (id) {
        await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);

        const updatedTodos = allTodos.filter((todo) => todo._id !== id);
        setAllTodos(updatedTodos);
        console.log("Todo deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdate = async (id) => {
    console.log("id", id);
    const todoItem = await allTodos.find((todo) => todo._id == id);
    if (todoItem) {
      setTodo(todoItem.todo);
      setTodoToUpdate(todoItem);
    }
  };

  const handleClear = () => {
    if (todo !== "") {
      setTodo("");
    }
  };

  return (
    <div className={styles.todoContainer}>
      <input
        placeholder="enter your todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={handleAddOrUpdate}>
        {todoToUpdate && todo !== "" ? "Update todo" : "Add todo"}
      </button>
      <button onClick={handleClear}>clear</button>
      {allTodos.map((item, i) => (
        <div className={styles.todoList}>
          <div key={item._id}>{item.todo}</div>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          <button onClick={() => handleUpdate(item._id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
