import React, { useReducer } from 'react'
import './index.css';
import './App.css';


const App = () => {
  const [ checked, toggle ] = useReducer(
    checked => !checked,
    false
  )

  return (
    <>
      <input
        type="checkbox"
        value={ checked }
        onChange={ toggle } />
      <p>{ checked ? "Checked" : "Not Checked" }</p>
    </>
  )
}

export default App;
