import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[100vh] p-5 gap-2 bg-yellow-200">
   <h2 className="mt-3 mb-5 text-4xl uppercase animate-bounce">To-do With Redux</h2>


      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
