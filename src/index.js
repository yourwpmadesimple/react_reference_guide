import { React } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [ footWear, campingShelter, campingTool ] = [ 'boots', 'tent', 'headlamp' ]
console.log(campingTool)

ReactDOM.render(
  <App authorized={ true } />,
  document.getElementById('root')
);
