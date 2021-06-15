import PropTypes from 'prop-types';
import Progress from './Progress';
import CurrentChapter from './CurrentChapter';
import * as bookStyles from '../styles/Book.module.css';

const {
  bookContainer,
  displayFlex,
  bookCategory,
  bookTitle,
  bookLinks,
  removeBook,
  alignCenter,
} = bookStyles;

function Book(props) {
  const {
    title, category, clickhandler, book,
  } = props;

  return (
    <div className={`${bookContainer} ${displayFlex}`}>
      <div>
        <ul>
          <li className={bookCategory}>{category}</li>
          <li className={bookTitle}>{title}</li>
          <li className={bookLinks}>Author Name</li>
        </ul>
        <ul className={`${displayFlex} ${alignCenter}`}>
          <li className={bookLinks}>Comments</li>
          <li className={bookLinks}>
            <button
              className={`${removeBook} ${bookLinks}`}
              type="submit"
              onClick={() => clickhandler(book)}
            >
              Remove book
            </button>
          </li>
          <li className={bookLinks}>Edit</li>
        </ul>
      </div>
      <Progress />
      <CurrentChapter />
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickhandler: PropTypes.func.isRequired,
  book: PropTypes.shape(
    { id: PropTypes.number, title: PropTypes.string, category: PropTypes.string },
  ).isRequired,
};

export default Book;
