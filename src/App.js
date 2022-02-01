import logo from './logo.svg';
import './App.css';

// Components
import Books from './components/Books';
import Characters from './components/Characters';
import Movies from './components/Movies';

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
