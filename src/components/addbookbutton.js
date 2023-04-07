import React from 'react';
import PropTypes from 'prop-types';

function AddBookButton({ onClick }) {
  return (
    <button type="submit" className="primary-button-big" onClick={onClick}>
      ADD BOOK
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
