import React from 'react';

const GridBlock = props => {

  const gridDisplay = () => {
    if (props.isCover) return <span>{props.value}</span>;
    else {
      if (props.memory[1].length) {
        return null;
      } else {
        return (
          <div className={circleClassName()}>
            <span>{props.memory[0] === 0 ? '' : props.memory[0]}</span>
          </div>
        );
      }
    }
  };

  const clickHandler = () => {
    if (props.actionMode === 'number') {
      return null;
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
