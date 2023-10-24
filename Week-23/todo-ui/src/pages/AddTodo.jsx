import React, { useEffect, useState } from "react";
import styles from "./AddTodo.module.less";
import axios from "axios";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  const getTodo = async () => {
    try {
      const data = await axios.get(`http://localhost:3000/api`);
      console.log("data", data.data);
      setAllTodos(data.data);
    } catch (error) {
      console.error("Error getting todos:", error);
    }
  };

  const handleAddTodo = async () => {
    try {
      if (todoToUpdate) {
        // If todoToUpdate is set, update the existing todo
        await axios.put(`http://localhost:3000/api/${todoToUpdate._id}`, {
          todo,
        });
        setTodoToUpdate(null); // Reset the todoToUpdate state
      } else {
        // Otherwise, add a new todo
        await axios.post("http://localhost:3000/api", {
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
    console.log("id", id);
    if (id) {
      const updatedTodos = allTodos.find((todo) => todo._id !== id);
      setAllTodos(updatedTodos);
      await axios
        .delete(`http://localhost:3000/api/${id}`)
        .then((res) => {
          console.log("res", res.data);
        })
        .catch((err) => console.log("error", error));
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
      <button onClick={handleAddTodo}>
        {(todoToUpdate && todo !== "") ? "Update todo" : "Add todo"}
      </button>
      <button onClick={handleClear}>clear</button>
      {allTodos.map((item, i) => (
        <div className={styles.todoList}>
          <div key={i}>{item.todo}</div>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          <button onClick={() => handleUpdate(item._id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default AddTodo;
