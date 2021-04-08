import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // react does additional checks during development and gives warnings on the console if there are any warnings to report 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // the position where the App is rendered to the DOM
  document.getElementById('root')
);


