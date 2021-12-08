import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function AppTwo() {
  return (
    <h1>This is the second App</h1>
  )
}

ReactDOM.render(
  // Can use <></> tags in place of div tags
  <>
    <App />
    <AppTwo />
  </>,
  document.getElementById('root')
);
