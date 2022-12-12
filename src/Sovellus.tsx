import './Sovellus.css';
import Chessboard from './components/Chessboard/Chessboard'

function Sovellus() {
  return (
    <div id="sovellus">
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

export default Sovellus;