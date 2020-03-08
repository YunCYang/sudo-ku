import React from 'react';

const GridBlock = props => {

  const coverNumber = () => {
    return props.isCover ? <span>{props.value}</span> : null;
  };

  return (
    <div className={`col col-${props.index}`}>
      {coverNumber()}
    </div>
  );
};

export default GridBlock;
