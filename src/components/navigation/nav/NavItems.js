import React from 'react';
import classes from './NavItems.css';

import Item from './Item';

const Items = () => {
  return (
    <ul className={classes.NavItems}>
      <Item link="/" exact>
        Burger Builder
      </Item>
      <Item link="/orders">Orders</Item>
    </ul>
  );
};

export default Items;
