import React, { useState, useEffect } from 'react'
import './index.css';
import './App.css';


const App = ({ login }) => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true)

    const url = `https://api.github.com/users/${login}`
    fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: "token: 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"
      }
    })
      .then(res => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [ login ])

  if (loading) return <h1 className="text-center">Loading...</h1>
  if (error)
    return <pre>{ JSON.stringify(error, null, 2) } </pre>;
  if (!data) return null;

  if (data) {
    console.log('Returned Object: ', data)
    return (
      <div className="App">
        <h1>{ data.name }</h1>
        <p>{ data.location } </p>
        <img className="inline-block" alt={ data.company } src={ data.avatar_url } />
      </div>
    )
  }
  return <div>No user Available</div>
}
export default App;
