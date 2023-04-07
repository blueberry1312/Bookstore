import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import AddBookButton from './addbookbutton';

function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const [addedBookId, setAddedBookId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      item_id: id, title, author, category,
    })).then(() => {
      dispatch(fetchBooks());
    });
    setAddedBookId(id);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  useEffect(() => {
    if (addedBookId !== '') {
      const timeoutId = setTimeout(() => {
        setAddedBookId('');
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [addedBookId]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">
        Title:
        <input id="title-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label htmlFor="author-input">
        Author:
        <input id="author-input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label htmlFor="category-input">
        Category:
        <input id="category-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <AddBookButton onClick={handleSubmit} />
      {addedBookId !== '' && (
        <p>
          A new book has been added with ID:
          {addedBookId}
        </p>
      )}
    </form>
  );
}

export default NewBookForm;
