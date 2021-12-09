import { React, useState } from 'react'
import './index.css';
import './App.css';


const App = () => {
  const [ emotion, setEmotion ] = useState('Happy')
  return (
    <>
      <h1>The current emotion is { emotion } </h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={ () => setEmotion('Frustration') }>
        Frustrated
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={ () => setEmotion('Enthusiastic') }>
        Enthusiastic
      </button>
    </>
  )
}

export default App;
