import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../reducers/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList(props) {
  const {
    books, removebook, changefilter, filter,
  } = props;

  function handleRemoveBook(book) {
    const bookOfInterest = books.find((bookElt) => book.id === bookElt.id);
    removebook(bookOfInterest);
  }

  function handleFilterChange(filter) {
    changefilter(filter);
  }

  function filterBooksByCategory() {
    if (filter === 'All') return books;
    return books.filter((book) => book.category === filter);
  }

  const booksToDisplay = filterBooksByCategory();
  const booksMarkup = booksToDisplay.map((book) => {
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
    <div>
      <CategoryFilter changehandler={handleFilterChange} />
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
    </div>
  );
}
const mapStateToProps = (state) => {
  const { booksReducer, changeFilterReducer } = state;
  return {
    books: booksReducer.books,
    filter: changeFilterReducer,
  };
};
const mapDispatchToProps = (dispatch) => ({
  removebook: (book) => dispatch(removeBook(book)),
  changefilter: (filter) => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
  changefilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
