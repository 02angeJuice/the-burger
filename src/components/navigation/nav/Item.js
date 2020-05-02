import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Item.css';

const Item = ({ children, link, exact }) => {
  return (
    <li className={classes.Item}>
      <NavLink exact={exact} to={link} activeClassName={classes.active}>
        {children}
      </NavLink>
    </li>
  );
};

export default Item;
