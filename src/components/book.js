import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  return (
    <li>
      {book.title}
      {' '}
      by
      {' '}
      {book.author}
      <button type="button" onClick={onDelete}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
