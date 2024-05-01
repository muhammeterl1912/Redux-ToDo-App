import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clr } from "../redux/toDoSlice";

const TodoList = () => {
  const toDolist = useSelector((state) => state.toDo.todoList);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clr());
  };

  return (
    <div>
      <div>
        {toDolist.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      {toDolist.length ? (
        <div className="flex items-center justify-center mt-5">
          <button
            className="p-4 bg-red-500 text-white w-20 rounded "
            onClick={handleClearList}
          >
            Clear
          </button>
        </div>
      ):""}
    </div>
  );
};

export default TodoList;
