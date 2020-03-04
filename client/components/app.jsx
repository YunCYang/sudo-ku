import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './main';
import Game from './game';
import Shadow from './shadow';
import Modal from './modal';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className='main'>
          <Route exact path='/' render={() => <Main />} />
          <Route path='/game' render={() => <Game />} />
          <Shadow />
          <Modal />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
