import React from 'react';

import Home from './components/home';
import NavBar from './components/navBar';
import About from './components/about';
import SignupForm from './components/signupForm';
import Articles from './components/articles';
import Error from './components/error';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/articles' element={<Articles />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/signupform' element={<SignupForm />}/>
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
