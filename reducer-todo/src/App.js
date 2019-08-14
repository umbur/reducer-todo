import React, { useState, useReducer } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    });
  }

  function clearTodo() {
    dispatch({
      type: "CLEAR_TODO"
    });
  }
  return (
    <div>
      <TodoForm dispatch={dispatch} clearTodo={clearTodo} />
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
