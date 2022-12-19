import './App.css';
import CreateGame from './components/CreateGame'
import JoinGame from './components/JoinGame'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mainmenu from './components/Mainmenu';
import Register from './components/Register';
import Sovellus from './Sovellus';

function App() {

  
  return (
    <Router>
    <div id="app">
      <Routes>
        <Route path="/" element={<Mainmenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Sovellus />} />
        <Route path="/creategame" element={<CreateGame  />} />
        <Route path="/joingame" element={<JoinGame />} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
