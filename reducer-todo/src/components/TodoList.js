import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("todo props", props);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
