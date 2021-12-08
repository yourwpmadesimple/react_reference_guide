import React from 'react'
import './App.css';

// This is a sub component of the App component
function Header(props) { // the props object holds all the properties for the component
  console.log(props)
  return (
    <header>
      <h1>{ props.name }'s Code Kitchen</h1>
    </header>
  )
}
// This is a sub component of the App component
function Main(props) {
  console.log(props)
  return (
    <section>
      <p>We serve a lot of { props.adjective } code recipes</p>
    </section>
  )
}
// This is a sub component of the App component
function Footer(props) {
  console.log(props)
  return (
    <footer>
      <p>Copyright - { props.year } </p>
    </footer>
  )
}

// This is the main component of App.js
const App = () => {
  let options = { month: 'long' };
  let month = new Date().toLocaleString('default', { month: 'long' })
  let day = new Date().getDate()
  let year = new Date().getFullYear()
  return (
    <div className="App">
      <Header name="Ariana" />
      <Main adjective="Awesome" />
      <Footer year={ `${month} ${day}, ${year}` } />
    </div>
  );
}

export default App;
