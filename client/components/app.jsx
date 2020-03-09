import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './main';
import Game from './game';
import Shadow from './shadow';
import Modal from './modal';

const App = () => {
  const [difficulty, setDifficulty] = React.useState(0);
  const [currentGame, setCurrentGame] = React.useState({
    0: {}, 1: {}, 2: {}, 3: {}, 4: {}
  });
  const [newGame, setNewGame] = React.useState(true);
  const [memory, setMemory] = React.useState({
    0: [], 1: [], 2: [], 3: [], 4: []
  });

  return (
    <Router>
      <Switch>
        <>
          <div className="main">
            <Route exact path='/' render={() => <Main difficulty={difficulty}
              setDifficulty={setDifficulty} setNewGame={setNewGame} currentGame={currentGame} />} />
            <Route path='/game' render={() => <Game difficulty={difficulty}
              newGame={newGame} currentGame={currentGame} setCurrentGame={setCurrentGame}
              memory={memory} setMemory={setMemory}/>} />
          </div>
          <Shadow />
          <Modal />
        </>
      </Switch>
    </Router>
  );
};

export default App;
