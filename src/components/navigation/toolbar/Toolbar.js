import React from 'react';
import classes from './Toolbar.css';

import Logo from '../../logo/Logo';
import NavItems from '../nav/NavItems';
import Toggle from '../sidedrawer/toggle/Toggle';

const Toolbar = ({ toggleClicked }) => {
  return (
    <header className={classes.Toolbar}>
      <Toggle clicked={toggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
