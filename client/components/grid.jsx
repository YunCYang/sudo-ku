import React from 'react';
import GridRow from './gridRow';

const Grid = props => {
  const [gameData, setGameData] = React.useState([]);

  React.useEffect(
    () => {
      const gameArr = [[], [], [], [], [], [], [], [], []];
      for (let i = 0; i < props.puzzle.length; i++) {
        for (let j = 0; j < props.puzzle[0].length; j++) {
          gameArr[i].push({ value: props.puzzle[i][j], isCover: false });
        }
      }
      for (const position of props.cover) {
        gameArr[position[0]][position[1]].isCover = true;
      }
      setGameData(gameArr);
    }, [props.puzzle]
  );

  const renderGridRow = () => {
    return gameData.map(
      (item, index) => <GridRow key={index} rowData={item} index={index} />
    );
  };

  return (
    <>
      {renderGridRow()}
    </>
  );
};

export default Grid;
