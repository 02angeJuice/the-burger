import React from 'react';
import classes from './Modal.css';

import Backdrop from '../backdrop/Backdrop';

const Modal = ({ children, showModal, closeModal }) => {
  const renderModal = () => {
    return (
      <div
        className={classes.Modal}
        style={{
          transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: showModal ? '1' : '0',
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <Backdrop show={showModal} clicked={closeModal} />
      {renderModal()}
    </>
  );
};

export default Modal;
