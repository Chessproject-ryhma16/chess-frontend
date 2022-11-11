import './App.css';
import Chessboard from './components/Chessboard'
import Menu from './components/Menu'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div id="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<Chessboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
