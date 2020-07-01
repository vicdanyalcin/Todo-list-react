import React, { useState } from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="addtodos-btn" onSubmit={addTodo}>
        Add Todo
      </button>
    </form>
  );
}
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button className="complete-btn" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Meet friends for breakfast", isCompleted: false },
    { text: "Coding", isCompleted: false },
    { text: "Doing workout", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <h1>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </h1>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
