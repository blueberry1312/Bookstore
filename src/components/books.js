import BookList from './booklist';
import NewBookForm from './newbookform';

function Books() {
  return (
    <div className="container">
      <BookList />
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <NewBookForm />
    </div>
  );
}

export default Books;
