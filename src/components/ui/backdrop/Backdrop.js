import React from 'react';
import classes from './Backdrop.css';

const Backdrop = ({ show, clicked }) => {
  const renderBackdrop = () => {
    if (!show) return null;
    return <div onClick={clicked} className={classes.Backdrop}></div>;
  };

  return <>{renderBackdrop()}</>;
};

export default Backdrop;
