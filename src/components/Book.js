import PropTypes from 'prop-types';

function Book(props) {
  const {
    id, title, category, clickhandler, book,
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="submit"
          onClick={() => clickhandler(book)}
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickhandler: PropTypes.func.isRequired,
  book: PropTypes.shape(
    { id: PropTypes.number, title: PropTypes.string, category: PropTypes.string },
  ).isRequired,
};

export default Book;
