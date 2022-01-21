import React from 'react';
import NavBar from './components/navBar';
import About from './components/about';
import SignupForm from './components/signupForm';
import Articles from './components/articles';

function App() {
  return (
    <div>
      <NavBar />
      <Articles />
      <SignupForm />
      <About />
    </div>
  );
}

export default App;
