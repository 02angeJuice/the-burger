import React from 'react';
import classes from './Controls.css';

import BuildControl from './BuildControl';

const initControls = [
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
  { label: 'salad', type: 'salad' },
];

const Controls = ({ added, removed, disabled, purchasable, price }) => {
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
    if (price > 0)
      return (
        <p>
          Current Price: <strong>{price}$</strong>
        </p>
      );

    return (
      <p>
        Current Price: <strong>0$</strong>
      </p>
    );
  };
  console.log(purchasable);

  return (
    <div className={classes.Controls}>
      {renderPrice()}
      {renderBuildControl()}
      <button className={classes.OrderButton} disabled={!purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default Controls;
