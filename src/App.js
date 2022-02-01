import { useState, useEffect } from 'react';
import './App.css';

// Components
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';

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
      <Books handleFetch={handleFetch} data={data}/>
      
      <Characters />
      <Movies />
    </div>
  );
}

export default App;
