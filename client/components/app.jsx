import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './main';
import Game from './game';
import Modal from './modal';

const App = () => {
  const [difficulty, setDifficulty] = React.useState(0);
  const [currentGame, setCurrentGame] = React.useState({
    0: {}, 1: {}, 2: {}, 3: {}, 4: {}
  });
  const [newGame, setNewGame] = React.useState(true);
  const emptyMoves = [
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]]
  ];
  const [move0, setMove0] = React.useState([emptyMoves]);
  const [move1, setMove1] = React.useState([emptyMoves]);
  const [move2, setMove2] = React.useState([emptyMoves]);
  const [move3, setMove3] = React.useState([emptyMoves]);
  const [move4, setMove4] = React.useState([emptyMoves]);
  const [gameWon, setGameWon] = React.useState(false);
  const [modalShown, setModalShown] = React.useState(false);

  const selectMove = () => {
    if (difficulty === 0) {
      return move0;
    } else if (difficulty === 1) {
      return move1;
    } else if (difficulty === 2) {
      return move2;
    } else if (difficulty === 3) {
      return move3;
    } else if (difficulty === 4) {
      return move4;
    }
  };

  const selectSetMove = () => {
    if (difficulty === 0) {
      return setMove0;
    } else if (difficulty === 1) {
      return setMove1;
    } else if (difficulty === 2) {
      return setMove2;
    } else if (difficulty === 3) {
      return setMove3;
    } else if (difficulty === 4) {
      return setMove4;
    }
  };

  return (
    <Router>
      <Switch>
        <>
          <div className="main">
            <Route exact path='/' render={() => <Main difficulty={difficulty}
              setDifficulty={setDifficulty} setNewGame={setNewGame} currentGame={currentGame}
              setGameWon={setGameWon} setMove={selectSetMove()} emptyMoves={emptyMoves} />} />
            <Route path='/game' render={() => <Game difficulty={difficulty}
              newGame={newGame} currentGame={currentGame} setCurrentGame={setCurrentGame}
              move={selectMove()} setMove={selectSetMove()} gameWon={gameWon}
              setGameWon={setGameWon} setModalShown={setModalShown}/>} />
          </div>
          <Modal modalShown={modalShown} setModalShown={setModalShown} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
