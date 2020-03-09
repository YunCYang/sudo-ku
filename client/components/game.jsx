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
  const [block, setBlock] = React.useState([-1, -1]);

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

  const handleNumberClick = num => {
    setActionMode('number');
    if (guessNum !== num) setGuessNum(num);
    else {
      setGuessNum(0);
      setActionMode('');
    }
  };

  return (
    <div className='content game-content'>
      <div className='grid'>
        <Grid puzzle={puzzle} cover={cover} actionMode={actionMode}
          setActionMode={setActionMode} guessNum={guessNum}
          memory={props.memory} setMemory={props.setMemory}
          isNote={isNote} setIsNote={setIsNote} block={block}
          setBlock={setBlock} />
      </div>
      <div className="panel">
        <div className='number'>
          <div className="number__button">
            <button className={guessNum === 1 ? 'active' : ''} onClick={
              () => handleNumberClick(1)
            }>1</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 2 ? 'active' : ''} onClick={
              () => handleNumberClick(2)
            }>2</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 3 ? 'active' : ''} onClick={
              () => handleNumberClick(3)
            }>3</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 4 ? 'active' : ''} onClick={
              () => handleNumberClick(4)
            }>4</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 5 ? 'active' : ''} onClick={
              () => handleNumberClick(5)
            }>5</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 6 ? 'active' : ''} onClick={
              () => handleNumberClick(6)
            }>6</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 7 ? 'active' : ''} onClick={
              () => handleNumberClick(7)
            }>7</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 8 ? 'active' : ''} onClick={
              () => handleNumberClick(8)
            }>8</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 9 ? 'active' : ''} onClick={
              () => handleNumberClick(9)
            }>9</button>
          </div>
          <div className="number__button">
            <button className={guessNum === -1 ? 'active' : ''} onClick={
              () => handleNumberClick(-1)
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
