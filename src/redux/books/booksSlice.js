import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../components/bookapi';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await bookService.getBooks();
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const newBook = await bookService.addBook(book);
  return newBook;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await bookService.deleteBook(id);
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({ ...state, status: 'succeeded', books: action.payload }))
      .addCase(fetchBooks.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }));
  },
});

export default bookSlice.reducer;
