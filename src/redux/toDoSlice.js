import { createSlice } from "@reduxjs/toolkit";
const getTodo = JSON.parse(localStorage.getItem("todoList"));
const initialState = {
  todoList:
    getTodo?.length > 0
      ? getTodo
      : [
          {
            id: new Date().getTime(),
            text: "Keep Going On 👍",
            completed: false,
          },
        ],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    add: (state, action) => {
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...state.todoList,
          { id: new Date().getTime(), text: action.payload, completed: false },
        ])
      );
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: action.payload, completed: false },
        ],
      };
    },
    del: (state, action) => {
      localStorage.setItem(
        "todoList",
        JSON.stringify(
          state.todoList.filter((item) => item.id !== action.payload)
        )
      );
      return {
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    },
    clr: () => {
      localStorage.setItem("todoList", JSON.stringify([]));
      return initialState;
    },
    toggle: (state, action) => {
      const toggleStorage = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: action.payload.boolean };
        }
        return item;
      });
      localStorage.setItem("todoList", JSON.stringify(toggleStorage));
      return {
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, completed: action.payload.boolean };
          }
          return item;
        }),
      };
    },
  },
});
export const { add, del, clr, toggle } = toDoSlice.actions;
export default toDoSlice.reducer;
