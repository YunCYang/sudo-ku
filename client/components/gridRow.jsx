import React from 'react';
import GridBlock from './gridBlock';

const GridRow = props => {
  const [blockArr, setBlockArr] = React.useState([]);

  React.useEffect(
    () => {
      if (props.rowData.length) {
        setBlockArr(props.rowData);
      }
    }, [props.rowData]
  );

  const renderGridBlock = () => {
    if (blockArr.length) {
      return blockArr.map((item, index) => <GridBlock key={index}
        value={item.value} isCover={item.isCover} index={index} />);
    } else return null;
  };

  return (
    <div className={`row row-${props.index}`}>
      {renderGridBlock()}
    </div>
  );
};

export default GridRow;
