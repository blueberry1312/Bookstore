import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function RemoveBookButton({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <button type="submit" className="button-outline" onClick={handleClick}>Remove Book</button>
  );
}

RemoveBookButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBookButton;
