import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <div>
      <Nav />
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
