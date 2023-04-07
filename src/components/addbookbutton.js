import React from 'react';
import PropTypes from 'prop-types';

function AddBookButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Add Book
    </button>
  );
}

AddBookButton.defaultProps = {
  onClick: () => {},
};

AddBookButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddBookButton;
