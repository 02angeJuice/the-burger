import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../layout/Layout';
import BurgerBuilder from '../builder/BurgerBuilder';
import Checkout from '../checkout/Checkout';
import Orders from '../orders/Orders';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </Layout>
  );
};

export default App;
