import { CREATEBOOK, REMOVEBOOK, CHANGEFILTER } from '../actions/index';
import { CATEGORIES } from '../containers/BooksForm';

export const bookReducer = (state, action) => {
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

export const changeFilterReducer = (state, action) => {
  if (action.type === CHANGEFILTER) {
    switch (action.payload) {
      case CATEGORIES[0]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[0]);
        return { books, filter: CATEGORIES[0] };
      }
      case CATEGORIES[1]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[1]);
        return { books, filter: CATEGORIES[1] };
      }
      case CATEGORIES[2]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[2]);
        return { books, filter: CATEGORIES[2] };
      }
      case CATEGORIES[3]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[3]);
        return { books, filter: CATEGORIES[3] };
      }
      case CATEGORIES[4]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[4]);
        return { books, filter: CATEGORIES[4] };
      }
      case CATEGORIES[5]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[5]);
        return { books, filter: CATEGORIES[5] };
      }
      case CATEGORIES[6]:
      {
        const books = [...state.books].filter((book) => book.category === CATEGORIES[6]);
        return { books, filter: CATEGORIES[6] };
      }
      default:
        return { books: [...state.books], filter: 'All' };
    }
  }
  return state;
};
