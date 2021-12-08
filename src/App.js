import React from 'react'
import './App.css';

// This is a sub component of the App component
function Header() {
  return (
    <header>
      <h1>Wayne's Code Kitchen</h1>
    </header>
  )
}
// This is a sub component of the App component
function Main() {
  return (
    <section>
      <p>We serve a lot of delicious code recipes</p>
    </section>
  )
}
// This is a sub component of the App component
function Footer() {
  return (
    <footer>
      <p>True story</p>
    </footer>
  )
}

// This is the main component of App.js
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
