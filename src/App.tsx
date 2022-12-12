import './App.css';
import Chessboard from './components/Chessboard'
import Menu from './components/Menu'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mainmenu from './components/Mainmenu';
import Register from './components/Register';
import Users from './components/Users'

function App() {
  return (
    <Router>
    <div id="app">
      <Routes>
        <Route path="/" element={<Mainmenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Menu />} />
        <Route path="/user-info" element={<Users />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
