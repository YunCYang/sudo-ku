import React from 'react';
import createPuzzle from '../util/createPuzzle';
import randomCover from '../util/randomCover';
import Grid from './grid';

const Game = props => {
  const [puzzle, setPuzzle] = React.useState([]);
  const [cover, setCover] = React.useState([]);

  React.useEffect(
    () => {
      let success = false;
      while (!success) {
        try {
          setPuzzle(createPuzzle());
          success = true;
        } catch {
          continue;
        }
      }
      setCover(randomCover(props.difficulty));
    }, []
  );

  return (
    <div className='content game-content'>
      <div className='grid'>
        <Grid puzzle={puzzle} cover={cover} />
      </div>
      <div className="panel">
        <div className='number'>
          <div className="number__button">
            <button>1</button>
          </div>
          <div className="number__button">
            <button>2</button>
          </div>
          <div className="number__button">
            <button>3</button>
          </div>
          <div className="number__button">
            <button>4</button>
          </div>
          <div className="number__button">
            <button>5</button>
          </div>
          <div className="number__button">
            <button>6</button>
          </div>
          <div className="number__button">
            <button>7</button>
          </div>
          <div className="number__button">
            <button>8</button>
          </div>
          <div className="number__button">
            <button>9</button>
          </div>
          <div className="number__button">
            <button>X</button>
          </div>
        </div>
        <div className='action'>
          <div className="action__button">
            <button>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="action__button">
            <button>
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

export default Game;
