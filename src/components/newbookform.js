import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import AddBookButton from './addbookbutton';
import './newbookform.css';

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
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="title-input">
        <input id="title-input" type="text" className="input title-input" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label htmlFor="author-input">
        <input id="author-input" type="text" className="input author-input" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </label>
      <label htmlFor="category-input">
        <select id="category-input" className="input category-input" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled selected>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
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
