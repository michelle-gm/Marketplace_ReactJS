import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ArticlesProvider } from './contexts/ArticlesContext';

ReactDOM.render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

