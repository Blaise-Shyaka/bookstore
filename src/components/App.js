import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <BooksForm />
        <BooksList />
      </div>
    </div>
  );
}

export default App;
