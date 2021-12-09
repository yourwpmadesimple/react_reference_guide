import { React, useState, useEffect } from 'react'
import './index.css';
import './App.css';


const App = () => {
  const [ checked, setChecked ] = useState(false)

  const toggle = () => {
    setChecked(checked => !checked)
  }

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
