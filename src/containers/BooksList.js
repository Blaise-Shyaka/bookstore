import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;

  const booksMarkup = books.map((book) => {
    const { id, title, category } = book;
    return (<Book key={id} id={id} title={title} category={category} />);
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

export default connect(mapStateToProps, null)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape(
      [{ id: 3748, title: 'some title', category: 'category' }],
    ),
  ).isRequired,
};
