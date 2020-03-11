import React from 'react';
import { withRouter } from 'react-router-dom';

const Modal = props => {
  if (props.modalShown) {
    return (
      <div className='modal-shadow'>
        <div className="modal">
          <div className="content">
            <span>Congrats! You won!</span>
          </div>
          <div className="button">
            <button className='view' onClick={
              () => props.setModalShown(false)
            }>View Board</button>
            <button className='back' onClick={
              () => {
                props.history.push('/');
                props.setModalShown(false);
              }
            }>Back to Menu</button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default withRouter(Modal);
