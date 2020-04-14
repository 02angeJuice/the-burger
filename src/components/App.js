import React from 'react';
import styles from '../styles.css';

import Layout from './layout/Layout';
import BurgerBuilder from '../containers/builder/BurgerBuilder';

const App = () => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
};

export default App;
