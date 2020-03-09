import React from 'react';
import createPuzzle from '../util/createPuzzle';
import randomCover from '../util/randomCover';
import Grid from './grid';
import { withRouter } from 'react-router-dom';

const Game = props => {
  const [puzzle, setPuzzle] = React.useState([]);
  const [cover, setCover] = React.useState([]);
  const [actionMode, setActionMode] = React.useState('');
  const [guessNum, setGuessNum] = React.useState(0);
  const [isNote, setIsNote] = React.useState(false);

  React.useEffect(
    () => {
      if (props.newGame) {
        let success = false;
        let tempPuzzle = null;
        let tempCover = null;
        while (!success) {
          try {
            tempPuzzle = createPuzzle();
            setPuzzle(tempPuzzle);
            success = true;
          } catch {
            continue;
          }
        }
        tempCover = randomCover(props.difficulty);
        setCover(tempCover);
        const currentGameCopy = { ...props.currentGame };
        currentGameCopy[props.difficulty] = {
          puzzle: tempPuzzle,
          cover: tempCover
        };
        props.setCurrentGame(currentGameCopy);
      } else {
        setPuzzle(props.currentGame[props.difficulty].puzzle);
        setCover(props.currentGame[props.difficulty].cover);
      }
    }, []
  );

  return (
    <div className='content game-content'>
      <div className='grid'>
        <Grid puzzle={puzzle} cover={cover} actionMode={actionMode}
          setActionMode={setActionMode} guessNum={guessNum} />
      </div>
      <div className="panel">
        <div className='number'>
          <div className="number__button">
            <button className={guessNum === 1 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 1) setGuessNum(1);
                else setGuessNum(0);
              }
            }>1</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 2 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 2) setGuessNum(2);
                else setGuessNum(0);
              }
            }>2</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 3 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 3) setGuessNum(3);
                else setGuessNum(0);
              }
            }>3</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 4 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 4) setGuessNum(4);
                else setGuessNum(0);
              }
            }>4</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 5 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 5) setGuessNum(5);
                else setGuessNum(0);
              }
            }>5</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 6 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 6) setGuessNum(6);
                else setGuessNum(0);
              }
            }>6</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 7 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 7) setGuessNum(7);
                else setGuessNum(0);
              }
            }>7</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 8 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 8) setGuessNum(8);
                else setGuessNum(0);
              }
            }>8</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 9 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== 9) setGuessNum(9);
                else setGuessNum(0);
              }
            }>9</button>
          </div>
          <div className="number__button">
            <button className={guessNum === -1 ? 'active' : ''} onClick={
              () => {
                setActionMode('number');
                if (guessNum !== -1) setGuessNum(-1);
                else setGuessNum(0);
              }
            }>X</button>
          </div>
        </div>
        <div className='action'>
          <div className="action__button">
            <button onClick={
              () => props.history.push('/')
            }>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="action__button">
            <button className={isNote ? 'active' : ''} onClick={
              () => setIsNote(!isNote)
            }>
              <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="action__button">
            <button>
              <i className="fas fa-undo"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Game);
