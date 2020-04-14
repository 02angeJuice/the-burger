import React from 'react';
import styles from '../styles.css';

import Layout from './layout/Layout';
import BurgerBuilder from '../containers/builder/BurgerBuilder';

const App = () => {
  return (
    <Layout>
      <p className={`${styles.title} ${styles.fucker__bold}`}>The Burger</p>

      <p>Fucker's Burger</p>

      <BurgerBuilder />
    </Layout>
  );
};

export default App;
