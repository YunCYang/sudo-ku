import React from 'react';
import deepCloneArray from '../util/deepCloneArray';
import GridNotes from './gridNotes';

const GridBlock = props => {

  const gridDisplay = () => {
    if (!props.isCover) return <span>{props.value}</span>;
    else {
      if (props.move[props.move.length - 1][props.rowIndex][props.index][1].length) {
        return (
          <div className={circleClassName()}>
            <GridNotes notes={props.move[props.move.length - 1][props.rowIndex][props.index][1]} />
          </div>
        );
      } else {
        return (
          <div className={circleClassName()}>
            <span className='guess'>{props.move[props.move.length - 1][props.rowIndex][props.index][0] === 0
              ? '' : props.move[props.move.length - 1][props.rowIndex][props.index][0]}</span>
          </div>
        );
      }
    }
  };

  const clickHandler = () => {
    if (props.isCover && !props.gameWon) {
      if (props.actionMode === 'number') {
        const moveCopy = deepCloneArray(props.move[props.move.length - 1]);
        if (props.guessNum === -1) {
          moveCopy[props.rowIndex][props.index][0] = 0;
          moveCopy[props.rowIndex][props.index][1] = [];
          const stackCopy = [...props.move];
          stackCopy.push(moveCopy);
          props.setMove(stackCopy);
        } else {
          if (props.isNote) {
            let noteCopy = deepCloneArray(moveCopy[props.rowIndex][props.index][1]);
            moveCopy[props.rowIndex][props.index][0] = 0;
            if (!noteCopy.includes(props.guessNum)) noteCopy.push(props.guessNum);
            else {
              noteCopy = noteCopy.map(item => {
                if (item !== props.guessNum) return item;
              });
            }
            moveCopy[props.rowIndex][props.index][1] = noteCopy;
            const stackCopy = [...props.move];
            stackCopy.push(moveCopy);
            props.setMove(stackCopy);
          } else {
            if (moveCopy[props.rowIndex][props.index][0] !== props.guessNum) {
              moveCopy[props.rowIndex][props.index][0] = props.guessNum;
              moveCopy[props.rowIndex][props.index][1] = [];
              const stackCopy = [...props.move];
              stackCopy.push(moveCopy);
              props.setMove(stackCopy);
            } else {
              moveCopy[props.rowIndex][props.index][0] = 0;
              moveCopy[props.rowIndex][props.index][1] = [];
              const stackCopy = [...props.move];
              stackCopy.push(moveCopy);
              props.setMove(stackCopy);
            }
          }
        }
      } else if (props.actionMode === 'block' && props.block[0] === props.rowIndex &&
        props.block[1] === props.index) {
        props.setActionMode('');
        props.setBlock([-1, -1]);
      } else {
        if (!props.actionMode) props.setActionMode('block');
        props.setBlock([props.rowIndex, props.index]);
      }
    }
  };

  const circleClassName = () => {
    if (props.actionMode === 'block' && props.block[0] === props.rowIndex &&
      props.block[1] === props.index) return 'circle focus';
    else return 'circle';
  };

  const coverBlockClass = () => {
    if (props.isCover) return 'uncover';
    else return '';
  };

  return (
    <div className={`col col-${props.index} ${coverBlockClass()}`} onClick={clickHandler}>
      {gridDisplay()}
    </div>
  );
};

export default GridBlock;
