import { CREATEBOOK, REMOVEBOOK } from '../actions/index';
import { generateUniqueId } from '../containers/BooksForm';

const initialState = {
  books: [
    {
      id: generateUniqueId(),
      title: '48 Laws Of Power',
      category: 'Learning',
    },
    {
      id: generateUniqueId(),
      title: 'Deep Work',
      category: 'Horror',
    },
    {
      id: generateUniqueId(),
      title: 'Dead Aid',
      category: 'Sci-Fi',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATEBOOK:
      return { books: [...state.books, action.payload] };
    case REMOVEBOOK: {
      const newState = { books: [...state.books] };
      const bookIndex = newState.books.indexOf(action.payload);
      newState.books.splice(bookIndex, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducer;
