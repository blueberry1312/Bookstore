import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import AddBookButton from './addbookbutton';

function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

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
      <AddBookButton onClick={handleSubmit} />
    </form>
  );
}

export default NewBookForm;
