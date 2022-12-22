import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo-list App</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      {todos.length > 0 ? (
        <div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li className="todo" key={index}>
                {todo}{" "}
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}
