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
      del: (state,action) => {
        return {
            todoList: state.todoList.filter(item =>item.id !==action.payload)
          }
    
      },
      clr: () => {
      
        return initialState
      },
      toggle: (state,action) => {
      
        return {
            todoList: state.todoList.map(item => {
              if(item.id === action.payload.id) {
                return { ...item, completed: action.payload.boolean };
              }
              return item; 
            })
          };
      },
    },
  })
  export const { add,  del,  clr,toggle} = toDoSlice.actions
  export default toDoSlice.reducer