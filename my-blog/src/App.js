import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import About from './components/about/about';
import SignupForm from './components/signupForm/signupForm';
import Articles from './components/articles/articles';
import Error from './components/error/error';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setArticles(res.data))
  }, [])


  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/articles' element={<Articles articles={articles} />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/signupform' element={<SignupForm />}/>
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
