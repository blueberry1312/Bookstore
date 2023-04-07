import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './book';
import './books.css';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div>
      <ul className="books">
        {Object.values(books).map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book[0].title}
            author={book[0].author}
            category={book[0].category}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
