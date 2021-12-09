import { React, useState, useEffect } from 'react'
import './index.css';
import './App.css';


const App = () => {
  const [ checked, setChecked ] = useState(false)

  return (
    <>
      <input
        type="checkbox"
        value={ checked }
        onChange={ () => setChecked(checked => !checked) } />
      <p>{ checked ? "Checked" : "Not Checked" }</p>
    </>
  )
}

export default App;
