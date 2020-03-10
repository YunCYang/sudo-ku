import React from 'react';

const GridNotes = props => {
  const [noteDisplay, setNoteDisplay] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const renderNotes = () => {
    return noteDisplay.map((item, index) => {
      if (item) {
        return (
          <div key={index} className='note__block'>
            <span>{item}</span>
          </div>
        );
      } else return <div key={index} className='note__block'></div>;
    });
  };

  React.useEffect(
    () => {
      const newNoteDisplay = noteDisplay.map((item, index) => {
        if (props.notes.includes(index + 1)) return index + 1;
        else return 0;
      });
      setNoteDisplay(newNoteDisplay);
    }, [props.notes]
  );

  return (
    <div className='note'>
      {renderNotes()}
    </div>
  );
};

export default GridNotes;
