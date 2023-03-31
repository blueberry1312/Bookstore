import PropTypes from 'prop-types';
import Book from './book';

function BookList({ books, onDelete }) {
  return (
    <ul>
      {books.map((book, index) => (
        <Book key={`${book.title}-${book.author}`} book={book} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
