import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home, About} from './pages/pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="" className="App-link">Home</Link> | 
          <Link to="about" className="App-link">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>

      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
