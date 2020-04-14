import React from 'react';
import classes from './Controls.css';

import BuildControl from './BuildControl';

const initControls = [
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
  { label: 'salad', type: 'salad' },
];

const Controls = () => {
  // const [bacon, setBacon] = useState(0);
  // const [cheese, setCheese] = useState(0);
  // const [meat, setMeat] = useState(0);
  // const [salad, setSalad] = useState(0);

  const renderBuildControl = () => {
    return initControls.map(({ label }) => {
      return <BuildControl key={label} label={label} />;
    });
  };

  return <div className={classes.Controls}>{renderBuildControl()}</div>;
};

export default Controls;
