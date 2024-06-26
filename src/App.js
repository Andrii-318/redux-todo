import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/actions";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
      />
      <TodoForm addTodo={handleAddTodo} />
    </div>
  );
}

export default App;
