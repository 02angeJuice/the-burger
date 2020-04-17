import React from 'react';
import classes from './Logo.css';

import burgerLogo from '../../assets/images/original.png';

const Logo = ({ height }) => {
  return (
    <div className={classes.Logo} style={{ height: height }}>
      <img src={burgerLogo} alt="the burger" />
    </div>
  );
};

export default Logo;
