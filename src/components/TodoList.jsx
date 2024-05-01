import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clr } from "../redux/toDoSlice";
import { useEffect, useState } from "react";

const TodoList = () => {
  const toDolist = useSelector((state) => state.toDo.todoList);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("toDolist")) || []
  );

  const handleClearList = () => {
    dispatch(clr());
  };

  useEffect(() => {
    localStorage.setItem("toDolist", JSON.stringify(toDolist));
    setLocalData(toDolist);
  }, [toDolist]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("toDolist"));
    if (storedData) {
      setLocalData(storedData);
    }
  }, []);

  return (
    <div>
      <div>
        {localData.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      {localData.length ? (
        <div className="flex items-center justify-center mt-5">
          <button
            className="p-4 bg-red-500 text-white w-20 rounded "
            onClick={handleClearList}
          >
            Clear
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoList;
