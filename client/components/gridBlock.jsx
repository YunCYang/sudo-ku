import React from 'react';

const GridBlock = props => {

  const gridDisplay = () => {
    if (props.isCover) return <span>{props.value}</span>;
    else {
      if (props.isNote) {
        return null;
      } else {
        return null;
      }
    }
  };

  return (
    <div className={`col col-${props.index}`}>
      {gridDisplay()}
    </div>
  );
};

export default GridBlock;
