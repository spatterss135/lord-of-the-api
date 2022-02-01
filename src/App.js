import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// Components
import Home from './components/Home'
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';
import NavBar from './components/Nav'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/characters' element={<Characters/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
