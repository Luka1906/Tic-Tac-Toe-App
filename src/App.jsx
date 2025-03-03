import logo from "./assets/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Tic Tac Toe logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
           
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
