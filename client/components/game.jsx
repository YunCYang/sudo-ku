import React from 'react';
import createPuzzle from '../util/createPuzzle';
import randomCover from '../util/randomCover';
import Grid from './grid';
import deepCloneArray from '../util/deepCloneArray';
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

  React.useEffect(
    () => {
      let counter = 0;
      let finish = false;
      for (const loc of cover) {
        if (puzzle[loc[0]][loc[1]] !== props.move[props.move.length - 1][loc[0]][loc[1]][0]) {
          continue;
        } else {
          counter++;
          if (counter === cover.length) finish = true;
        }
      }
      if (finish) {
        props.setGameWon(true);
        props.setModalShown(true);
      }
    }, [props.move]
  );

  const handleNumberClick = num => {
    if (actionMode === 'block' && !props.gameWon) {
      const moveCopy = deepCloneArray(props.move[props.move.length - 1]);
      if (isNote) {
        let noteCopy = deepCloneArray(moveCopy[block[0]][block[1]][1]);
        moveCopy[block[0]][block[1]][0] = 0;
        if (!noteCopy.includes(num) && num !== -1) noteCopy.push(num);
        else if (num === -1) noteCopy = [];
        else {
          noteCopy = noteCopy.map(item => {
            if (item !== num) return item;
          });
        }
        moveCopy[block[0]][block[1]][1] = noteCopy;
        const stackCopy = [...props.move];
        stackCopy.push(moveCopy);
        props.setMove(stackCopy);
      } else {
        if (moveCopy[block[0]][block[1]][0] !== num) {
          moveCopy[block[0]][block[1]][1] = [];
          if (num !== -1) moveCopy[block[0]][block[1]][0] = num;
          else moveCopy[block[0]][block[1]][0] = 0;
          const stackCopy = [...props.move];
          stackCopy.push(moveCopy);
          props.setMove(stackCopy);
        } else {
          moveCopy[block[0]][block[1]][0] = 0;
          moveCopy[block[0]][block[1]][1] = [];
          const stackCopy = [...props.move];
          stackCopy.push(moveCopy);
          props.setMove(stackCopy);
        }
      }
    } else {
      setActionMode('number');
      if (guessNum !== num) setGuessNum(num);
      else {
        setGuessNum(0);
        setActionMode('');
      }
    }
  };

  const handleUndoClick = () => {
    if (props.move.length > 1 && !props.gameWon) {
      const moveCopy = [...props.move];
      moveCopy.pop();
      props.setMove(moveCopy);
    }
  };

  return (
    <div className='content game-content'>
      <div className='grid'>
        <Grid puzzle={puzzle} cover={cover} actionMode={actionMode}
          setActionMode={setActionMode} guessNum={guessNum}
          move={props.move} setMove={props.setMove} isNote={isNote}
          setIsNote={setIsNote} block={block} setBlock={setBlock}
          gameWon={props.gameWon} />
      </div>
      <div className="panel">
        <div className='number'>
          <div className="number__button">
            <button className={guessNum === 1 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(1)
            }>1</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 2 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(2)
            }>2</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 3 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(3)
            }>3</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 4 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(4)
            }>4</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 5 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(5)
            }>5</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 6 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(6)
            }>6</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 7 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(7)
            }>7</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 8 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(8)
            }>8</button>
          </div>
          <div className="number__button">
            <button className={guessNum === 9 && !props.gameWon ? 'active' : ''} onClick={
              () => handleNumberClick(9)
            }>9</button>
          </div>
          <div className="number__button">
            <button className={guessNum === -1 && !props.gameWon ? 'active' : ''} onClick={
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
            <button className={isNote && !props.gameWon ? 'active' : ''} onClick={
              () => setIsNote(!isNote)
            }>
              <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="action__button">
            <button onClick={handleUndoClick}>
              <i className="fas fa-undo"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Game);
