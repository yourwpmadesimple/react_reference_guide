import { React, useState, useEffect } from 'react'
import './index.css';
import './App.css';


const App = () => {


  return (
    <>
      <h1>The current emotion is { emotion } and { secondary }  </h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={ () => setSecondary('Crabby') }>
        Make Crabby
      </button>

      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={ () => setEmotion('Happy') }>
        Make Happy
      </button>
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
