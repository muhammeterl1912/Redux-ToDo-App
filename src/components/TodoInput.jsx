import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/toDoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(add(text));
      setText("");
    } else {
      alert("PLEASE ENTER ANY TO-DO !!!");
    }
  };

  return (
    <form
      className="w-[100%] flex justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="p-3 rounded w-1/3 focus:outline-none"
        placeholder="Add Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="p-4 bg-yellow-500 text-white w-20 rounded "
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
