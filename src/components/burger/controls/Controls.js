import React from 'react';
import classes from './Controls.css';

import BuildControl from './BuildControl';

const initControls = [
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
  { label: 'salad', type: 'salad' },
];

const Controls = ({ added, removed, disabled, price }) => {
  const renderBuildControl = () => {
    return initControls.map(({ label, type }) => {
      return (
        <BuildControl
          key={label}
          added={() => added(type)}
          removed={() => removed(type)}
          label={label}
          disabled={disabled[type]}
        />
      );
    });
  };

  const renderPrice = () => {
    if (price > 0) return <p>Current Price: {price}$</p>;

    return <p>Current Price: 0$</p>;
  };

  return (
    <div className={classes.Controls}>
      {renderPrice()}
      {renderBuildControl()}
    </div>
  );
};

export default Controls;
