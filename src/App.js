import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
    </Routes>
  </div>
  );
}

export default App;
