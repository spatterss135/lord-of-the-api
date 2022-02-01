<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
>>>>>>> 7ee89363d7b6fe56c5c845f2878eb7e1c4c69725
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
<<<<<<< HEAD
      <Books handleFetch={handleFetch} data={data}/>
      
      <Characters />
      <Movies />
=======
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/characters' element={<Characters/>}/>
        </Routes>
      </Router>
>>>>>>> 7ee89363d7b6fe56c5c845f2878eb7e1c4c69725
    </div>
  );
}

export default App;
