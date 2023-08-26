// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Додайте імпорт Provider
import App from './components/App';
import { store } from './store'; // Додайте імпорт store
import './index.css';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}> {/* Залиште Provider тут */}
      <App />
    </Provider>
  </React.StrictMode>
);
