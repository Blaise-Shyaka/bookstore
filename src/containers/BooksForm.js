import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook, removeBook } from '../reducers';

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
export const uniqueIds = [];
export const generateUniqueId = () => {
  const newId = Math.floor(Math.random() * 1000);
  if (!uniqueIds.includes(newId)) {
    uniqueIds.push(newId);
    return newId;
  }
  return generateUniqueId();
};

export function generateCategories() {
  const options = CATEGORIES.map((category) => (
    <option
      key={CATEGORIES.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));
  return options;
}

function BooksForm(props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const options = generateCategories();

  function handleChange(event) {
    let userInput = event.target.value;
    const elementType = event.target.tagName.toLowerCase();
    if (elementType === 'input') {
      setTitle(userInput);
      userInput = title;
      return;
    }

    if (elementType === 'select') {
      setCategory(userInput);
      userInput = category;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const book = {
      id: generateUniqueId(),
      title,
      category,
    };

    const { createbook } = props;
    createbook(book);

    // Reset store state
    setTitle('');
    setCategory('');
  }

  return (
    <div>
      <hr />
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book Title" onChange={handleChange} />
        <select onChange={handleChange}>
          <option selected disabled>Choose Book Category</option>
          {options}
        </select>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

BooksForm.propTypes = {
  createbook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createbook: (book) => dispatch(createBook(book)),
  removebook: (book) => dispatch(removeBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
