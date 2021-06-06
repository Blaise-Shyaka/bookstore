import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/books';

const uniqueIds = [];
const generateUniqueId = () => {
  const newId = Math.floor(Math.random() * 1000);
  if (!uniqueIds.includes(newId)) {
    uniqueIds.push(newId);
    return newId;
  }
  return generateUniqueId();
};

const initialState = {
  books: [{
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

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
