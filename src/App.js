import { useState, useEffect } from 'react';
import './App.css';

// Components
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';

function App() {

    let [data, setData] = useState([])

    const endpoint =  'https://the-one-api.dev/v2'


  useEffect(() => {
    let fetchData = async () => {
        let response = await fetch(`${endpoint}/movie`, {
            headers: {
                Authorization: `Bearer QG6hwAvDDV3WtknfWiAL`
            }
        })
        let rData = await response.json()
        console.log(rData)
    }
    fetchData()
})


  return (
    <div className="App">
      <Books />
      <Characters />
      <Movies />
    </div>
  );
}

export default App;
