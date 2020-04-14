import React from 'react';
import classes from './Modal.css';

const Modal = ({ children, show }) => {
  const renderModal = () => {
    // if (!show) {
    //   return null;
    // }

    return (
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    );
  };

  return <>{renderModal()}</>;
};

export default Modal;
