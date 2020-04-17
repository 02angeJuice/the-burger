import React from 'react';
import classes from './Item.css';

const Item = ({ children, link, active }) => {
  return (
    <li className={classes.Item}>
      <a href={link} className={active ? classes.active : null}>
        {children}
      </a>
    </li>
  );
};

export default Item;
