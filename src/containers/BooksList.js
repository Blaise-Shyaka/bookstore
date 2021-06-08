import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../reducers/index';

function BooksList(props) {
  const { books, removebook } = props;

  function handleRemoveBook(book) {
    const bookOfInterest = books.find((bookElt) => book.id === bookElt.id);
    removebook(bookOfInterest);
  }

  const booksMarkup = books.map((book) => {
    const { id, title, category } = book;
    return (
      <Book
        key={id}
        id={id}
        title={title}
        category={category}
        clickhandler={handleRemoveBook}
        book={book}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th> Book Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {booksMarkup}
      </tbody>
    </table>
  );
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  removebook: (book) => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
