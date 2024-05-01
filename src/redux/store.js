import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../redux/toDoSlice";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
