import React, { useState } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sidedrawer/SideDrawer';

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar toggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
