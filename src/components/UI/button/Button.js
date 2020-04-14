import React from 'react';
import classes from './Button.css';

const Button = ({ children, clicked, type }) => {
  return (
    <button className={`${classes.Button} ${classes[type]}`} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
