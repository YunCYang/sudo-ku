import React from 'react';
// import createPuzzle from '../util/createPuzzle';

const Game = () => {
  // let success = false;
  // while (!success) {
  //   try {
  //     console.log(createPuzzle());
  //     success = true;
  //   } catch {
  //     console.log('error');
  //   }
  // }
  return (
    <div className='content'>
      <div className='grid'></div>
      <div className='number'></div>
      <div className='action'></div>
    </div>
  );
};

export default Game;
