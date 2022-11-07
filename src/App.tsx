import './App.css';
import Chessboard from './components/Chessboard/Chessboard'

function App() {
  return (
    <div id="app">
      <div id="playerNo2">
      Player Name 2
      </div>
      <Chessboard/>
      <div id="playerNo1">
      Player Name 1
      </div>
    </div>
  );
}

export default App;
