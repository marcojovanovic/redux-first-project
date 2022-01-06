import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: 'todo1',
      completed: false,
      id: 2,
      title: 'todo2',
      completed: true,
      id: 3,
      title: 'todo3',
      completed: false,
    },
  ],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    completedTodos: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.completed === false) {
            item.completed = true;
          } else {
            item.completed = false;
          }
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, completedTodos } = todoSlice.actions;

export default todoSlice.reducer;
