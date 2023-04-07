import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import AddBookButton from './addbookbutton';

function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      item_id: id, title, author, category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
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
      <label htmlFor="category-input">
        Category:
        <input id="category-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <AddBookButton onClick={handleSubmit} />
    </form>
  );
}

export default NewBookForm;
