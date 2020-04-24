import React from 'react';
import classes from './CheckoutSummary.css';

import Burger from '../burger/Burger';
import Button from '../ui/button/Button';

const CheckoutSummary = ({ ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button clicked={checkoutCancel} type="Danger">
        Cancel
      </Button>
      <Button clicked={checkoutContinue} type="Success">
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
