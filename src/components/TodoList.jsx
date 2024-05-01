import {  useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const toDolist = useSelector((state) => state.toDo.todoList)
  console.log(toDolist)
  return (
    <div>
      <div>
      {toDolist.map((todo) => (
          <TodoItem key={todo.id} {...todo}  />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="p-4 bg-red-500 text-white w-20 rounded ">Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
