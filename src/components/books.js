import { useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Books:</h1>
      <ul>
        {books.map((book, index) => (
          <li key={`${book.title}-${book.author}`}>
            {book.title}
            {' '}
            by
            {book.author}
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add a book:</h2>
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
    </div>
  );
}

export default Books;
