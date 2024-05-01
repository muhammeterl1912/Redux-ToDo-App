import React from "react";

const TodoInput = () => {
  return (
    <form className="w-[100%] flex justify-center gap-4">
      <input
        type="text"
        className="p-3 rounded w-1/3 focus:outline-none"
        placeholder="Add Todo..."
      />
      <button type="submit" className="p-4 bg-yellow-500 text-white w-20 rounded ">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
