import { useState } from 'react';
import BookList from './booklist';
import NewBookForm from './newbookform';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Books:</h1>
      <BookList books={books} onDelete={handleDeleteBook} />
      <h2>Add a book:</h2>
      <NewBookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default Books;
