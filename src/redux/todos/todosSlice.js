import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: 'spora git',
        completed: true,
      },
      {
        id: 2,
        title: 'redux öğren',
        completed: false,
      },
    ],
    activeFilter: 'All',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const item = state.items.filter(item => item.id !== id);
      state.items = item;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: state => {
      const filter = state.items.filter(item => item.completed === false);
      state.items = filter;
    },
  },
});

export const {
  addTodo,
  toggle,
  deleteTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
