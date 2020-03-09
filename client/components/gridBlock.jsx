import React from 'react';

const GridBlock = props => {

  const gridDisplay = () => {
    if (props.isCover) return <span>{props.value}</span>;
    else {
      if (props.memory[1].length) {
        return null;
      } else {
        return (
          <div className='circle'>
            <span>{props.memory[0] === 0 ? '' : props.memory[0]}</span>
          </div>
        );
      }
    }
  };

  const clickHandler = () => {
    return null;
  };

  return (
    <div className={`col col-${props.index}`} onClick={clickHandler}>
      {gridDisplay()}
    </div>
  );
};

export default GridBlock;
