import React from 'react';
import { withRouter } from 'react-router-dom';

const Main = props => {

  return (
    <div className='content'>
      <div className='title'>
        <span>SUDO-KU</span>
      </div>
      <div className='option'>
        <div className="difficulty">
          <input type="radio" name="difficulty" id="beginner" className='activator'
            defaultChecked onChange={
              () => props.setDifficulty(0)
            }/>
          <input type="radio" name="difficulty" id="easy" className='activator'
            onChange={
              () => props.setDifficulty(1)
            }/>
          <input type="radio" name="difficulty" id="medium" className='activator'
            onChange={
              () => props.setDifficulty(2)
            }/>
          <input type="radio" name="difficulty" id="hard" className='activator'
            onChange={
              () => props.setDifficulty(3)
            }/>
          <input type="radio" name="difficulty" id="abyssal" className='activator'
            onChange={
              () => props.setDifficulty(4)
            }/>
          <div className="controls">
            <label htmlFor="easy" className='control control-forward' onClick={
              () => props.setDifficulty(1)
            }></label>
          </div>
          <div className="controls">
            <label htmlFor="beginner" className='control control-backward' onClick={
              () => props.setDifficulty(0)
            }></label>
            <label htmlFor="medium" className='control control-forward' onClick={
              () => props.setDifficulty(2)
            }></label>
          </div>
          <div className="controls">
            <label htmlFor="easy" className='control control-backward' onClick={
              () => props.setDifficulty(1)
            }></label>
            <label htmlFor="hard" className='control control-forward' onClick={
              () => props.setDifficulty(3)
            }></label>
          </div>
          <div className="controls">
            <label htmlFor="medium" className='control control-backward' onClick={
              () => props.setDifficulty(2)
            }></label>
            <label htmlFor="abyssal" className='control control-forward' onClick={
              () => props.setDifficulty(4)
            }></label>
          </div>
          <div className="controls">
            <label htmlFor="hard" className='control control-backward' onClick={
              () => props.setDifficulty(3)
            }></label>
          </div>
          <div className="track">
            <div className="slide">
              <span>Beginner</span>
            </div>
            <div className="slide">
              <span>Easy</span>
            </div>
            <div className="slide">
              <span>Medium</span>
            </div>
            <div className="slide">
              <span>Hard</span>
            </div>
            <div className="slide">
              <span>Abyssal</span>
            </div>
          </div>
        </div>
        <button type='button' onClick={
          () => props.history.push('/game')
        }>New Game</button>
        <button type='button'>Resume</button>
      </div>
    </div>
  );
};

export default withRouter(Main);
