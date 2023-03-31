import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewBookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, author });
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
      <button type="submit">Add Book</button>
    </form>
  );
}

NewBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBookForm;
