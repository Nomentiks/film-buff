import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Login from './Components/Login.js';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
    </Routes>
  </div>
  );
}

export default App;
