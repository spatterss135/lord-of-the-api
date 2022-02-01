import { useState, useEffect } from 'react';
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

    let [data, setData] = useState([])

    

//   useEffect(() => {
//     let fetchData = async () => {
//         let response = await fetch(`${endpoint}`, {
//             headers: {
//                 Authorization: `Bearer QG6hwAvDDV3WtknfWiAL`
//             }
//         })
//         let rData = await response.json()
//         console.log(rData)
//     }
//     fetchData()
// })

function handleFetch(e, query){
  e.preventDefault()
  const endpoint =  'https://the-one-api.dev/v2'
  let fetchData = async () => {
    let response = await fetch(`${endpoint}/${query}`, {
        headers: {
            Authorization: `Bearer QG6hwAvDDV3WtknfWiAL`
        }
    })
    let rData = await response.json()
    setData(rData)
}
fetchData()

}


  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/books' element={<Books />}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/characters' element={<Characters/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
