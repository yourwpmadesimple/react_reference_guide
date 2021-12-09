import React from 'react'
import './index.css';
import './App.css';

function SecretComponent() {
  return (<h1>Secret informationn for authorized users only</h1>)
}

function RegularComponent() {
  return (<h1>Everyone can see this component</h1>)
}


const App = (props) => {
  if (props.authorized) {
    return <SecretComponent />
  } else {
    return <RegularComponent />
  }
}

export default App;
