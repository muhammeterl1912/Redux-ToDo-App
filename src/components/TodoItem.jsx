import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { del, toggle } from "../redux/toDoSlice";
const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle({ boolean: !completed, id: id }));
  };

  const handleDelete = () => {
    dispatch(del(id));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div
      className="min-w-[40px] flex justify-between p-[10px] m-[10px]"
      style={styled}
    >
      <h2 className="flex justify-center items-center text-3xl">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="w-[40px] m-[10px] cursor-pointer"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="w-[40px] m-[10px] cursor-pointer"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
