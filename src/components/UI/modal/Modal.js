import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../backdrop/Backdrop';

const Modal = ({ children, showModal, closeModal }) => {
  const renderModal = () => {
    // if (!showModal) {
    //   return null;
    // }

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
    <Aux>
      <Backdrop show={showModal} clicked={closeModal} />
      {renderModal()}
    </Aux>
  );
};

export default Modal;
