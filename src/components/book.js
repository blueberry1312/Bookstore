import PropTypes from 'prop-types';
import React from 'react';
import RemoveBookButton from './removebookbutton';

function Book({
  id, title, author, category,
}) {
  return (
    <div>
      <p>
        ID:
        {id}
      </p>
      <p>
        Title:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <RemoveBookButton id={id} />
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
