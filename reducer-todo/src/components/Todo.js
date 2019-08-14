import React, { useState, useReducer } from "react";

const Todo = props => {
  return (
    <div style={props.todo.completed ? { textDecoration: 'line-through' } : null} onClick={() => props.toggleTodo(props.todo.id)}>{props.todo.item}</div>
  );
};

export default Todo;
