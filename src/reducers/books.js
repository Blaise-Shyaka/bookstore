import { CREATEBOOK, REMOVEBOOK } from '../actions/index';

const reducer = (state, action) => {
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

export default reducer;
