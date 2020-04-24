import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../layout/Layout';
import BurgerBuilder from '../builder/BurgerBuilder';
import Checkout from '../checkout/Checkout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Layout>
  );
};

export default App;
