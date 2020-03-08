import React from 'react';

const GridBlock = props => {

  return (
    <div className={`col col-${props.index}`}>
      <span>{props.value}</span>
    </div>
  );
};

export default GridBlock;
