import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <div>
        {[1, 2].map((todo) => (
          <TodoItem key={todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
