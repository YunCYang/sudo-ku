import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './main';
import Game from './game';
import Shadow from './shadow';
import Modal from './modal';

const App = () => {
  const [difficulty, setDifficulty] = React.useState(0);

  return (
    <Router>
      <Switch>
        <>
          <div className="main">
            <Route exact path='/' render={() => <Main setDifficulty={setDifficulty} />} />
            <Route path='/game' render={() => <Game difficulty={difficulty} />} />
          </div>
          <Shadow />
          <Modal />
        </>
      </Switch>
    </Router>
  );
};

export default App;
