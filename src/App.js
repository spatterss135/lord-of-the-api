import './App.css';

// Components
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Books />
      <Characters />
      <Movies />
    </div>
  );
}

export default App;
