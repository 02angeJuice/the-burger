import React from 'react';
import classes from './Controls.css';

import BuildControl from './BuildControl';

const initControls = [
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
  { label: 'salad', type: 'salad' },
];

const Controls = ({
  added,
  removed,
  disabled,
  purchasable,
  price,
  ordered,
}) => {
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
    return price > 0 ? price : 0;
  };

  return (
    <div className={classes.Controls}>
      <p>
        Current Price: <strong>{renderPrice()}$</strong>
      </p>

      {renderBuildControl()}
      <button
        onClick={ordered}
        className={classes.OrderButton}
        disabled={!purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default Controls;
