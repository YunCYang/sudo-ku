import React from 'react';
import deepCloneArray from '../util/deepCloneArray';

const GridBlock = props => {

  const gridDisplay = () => {
    if (props.isCover) return <span>{props.value}</span>;
    else {
      if (props.move[props.move.length - 1][props.rowIndex][props.index][1].length) {
        return null;
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
    // const emptyMoves = [
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]],
    //   [[0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []], [0, []]]
    // ];
    if (props.actionMode === 'number') {
      if (props.guessNum === -1) {
        if (props.isNote) {
          return null;
        } else {
          const moveCopy = deepCloneArray(props.move[props.move.length - 1]);
          moveCopy[props.rowIndex][props.index][0] = 0;
          moveCopy[props.rowIndex][props.index][1] = [];
          const stackCopy = [...props.move];
          stackCopy.push(moveCopy);
          props.setMove(stackCopy);
        }
      } else {
        if (props.isNote) {
          return null;
        } else {
          const moveCopy = deepCloneArray(props.move[props.move.length - 1]);
          moveCopy[props.rowIndex][props.index][0] = props.guessNum;
          moveCopy[props.rowIndex][props.index][1] = [];
          const stackCopy = [...props.move];
          stackCopy.push(moveCopy);
          props.setMove(stackCopy);
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
  };

  const circleClassName = () => {
    if (props.actionMode === 'block' && props.block[0] === props.rowIndex &&
      props.block[1] === props.index) return 'circle focus';
    else return 'circle';
  };

  return (
    <div className={`col col-${props.index}`} onClick={clickHandler}>
      {gridDisplay()}
    </div>
  );
};

export default GridBlock;
