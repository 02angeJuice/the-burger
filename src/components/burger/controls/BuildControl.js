import React from 'react';
import classes from './BuildControl.css';

const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={removed} className={classes.Less} disabled={disabled}>
        -
      </button>
      <button onClick={added} className={classes.More}>
        +
      </button>
    </div>
  );
};

export default BuildControl;
