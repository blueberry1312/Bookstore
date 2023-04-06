import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      list: [...state.list, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      list: state.list.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
