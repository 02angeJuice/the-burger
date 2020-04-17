import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../logo/Logo';
import Navitems from '../nav/NavItems';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = ({ open, closed }) => {
  let sideClasses = `${classes.SideDrawer} ${classes.Close}`;

  if (open) {
    sideClasses = `${classes.SideDrawer} ${classes.Open}`;
  }

  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={sideClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navitems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
