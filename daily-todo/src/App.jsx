import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const tasks = [
    { id: 1, name: "Brush Teeth" },
    { id: 2, name: "Make Bed" },
    { id: 3, name: "Eat Breakfast" },
    { id: 4, name: "Do Homework" },
    { id: 5, name: "Play Outside" },
    { id: 6, name: "Read a Book" },
    { id: 7, name: "Help with Dishes" },
    { id: 8, name: "Go to Sleep" },
  ];
  const [todos, setTodos] = useState([]);

  function addTodo(todoName) {
    setTodos([...todos, { id: nanoid(), name: todoName }]);
  }

  function removeTodo(todo) {
    const newTodos = todos.filter((value) => value != todo);
    setTodos(newTodos);
  }

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.name}</span>
            <button onClick={() => removeTodo(todo)}>✓</button>
          </div>
        ))}
      </div>
      <div className="buttons-container preset-buttons">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => addTodo(task.name)}
            className="preset-button"
          >
            {task.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
