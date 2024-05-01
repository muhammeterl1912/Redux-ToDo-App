import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [{ id: new Date().getTime(), text: "Keep Going On 👍", completed: false }],
  }
  
  export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
      add: (state,action) => {
        return {
            todoList: [
              ...state.todoList,
              { id: new Date().getTime(), text: action.payload, completed: false },
            ],
          }
      },
      del: (state) => {
      
      },
      clr: (state) => {
       return  state
      },
      toggle: (state, action) => {
 
      },
    },
  })
  export const { add,  del,  clr,toggle} = toDoSlice.actions
  export default toDoSlice.reducer