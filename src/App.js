import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// Components
import Home from './components/Home'
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';
<<<<<<< HEAD
import NavBar from './components/Nav'
=======
import { useEffect, useState } from 'react';
>>>>>>> 30290e3ef9b40842e9a02930d073c6f430812ee2

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

  function handleFetch(e, query) {
    e.preventDefault()
    const endpoint = 'https://the-one-api.dev/v2'
    let fetchData = async () => {
      let response = await fetch(`${endpoint}/${query}`, {
        headers: {
          Authorization: `Bearer QG6hwAvDDV3WtknfWiAL`
        }
<<<<<<< HEAD
    })
    let rData = await response.json()
    setData(rData)
}
fetchData()
=======
      })
      let rData = await response.json()
      // console.log(rData)
      setData(rData)
    }
    fetchData()
>>>>>>> 30290e3ef9b40842e9a02930d073c6f430812ee2

  }


  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/books' element={<Books />}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/characters' element={<Characters/>}/>
        </Routes>
      </Router>
=======
      <Books handleFetch={handleFetch} />
      <Characters />
      <Movies handleFetch={handleFetch} data={data} />
>>>>>>> 30290e3ef9b40842e9a02930d073c6f430812ee2
    </div>
  );
}

export default App;
