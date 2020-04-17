import React from 'react';
import classes from './Toggle.css';

const Toggle = ({ clicked }) => {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Toggle;
