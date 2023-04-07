import BookList from './booklist';
import NewBookForm from './newbookform';

function Books() {
  return (
    <div>
      <h1>Books:</h1>
      <BookList />
      <h2>Add a book:</h2>
      <NewBookForm />
    </div>
  );
}

export default Books;
