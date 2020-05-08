import React from 'react';
import classes from './Button.css';

const Button = ({ children, clicked, type, disabled }) => {
  return (
    <button
      className={`${classes.Button} ${classes[type]}`}
      disabled={disabled}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
