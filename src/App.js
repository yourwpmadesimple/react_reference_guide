import React, { useState, useEffect } from 'react'
import './index.css';
import './App.css';


const App = ({ login }) => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    const url = `https://api.github.com/users/${login}`
    fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: "token: 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"
      }
    })
      .then(res => res.json())
      .then(setData)
  }, [])

  if (data) {
    console.log(data)
    return <div>{ JSON.stringify(data) }</div>
  }

  return (
    <div className="App">
      <h1>Fetching Data with Hooks</h1>
    </div>
  )
}

export default App;
