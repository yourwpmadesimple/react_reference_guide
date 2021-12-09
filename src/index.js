import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const checkList = [ 'boots', 'tent', 'headlamp' ]
console.log(checkList[ 1 ])

ReactDOM.render(
  <App authorized={ true } />,
  document.getElementById('root')
);
