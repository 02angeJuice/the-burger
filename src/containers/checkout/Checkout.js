import React, { useState } from 'react';

import CheckoutSummary from '../../components/order/CheckoutSummary';

const Checkout = (props) => {
  const [ingredients] = useState({ salad: 1, meat: 1, cheese: 1, bacon: 1 });

  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  return (
    <>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancel={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      />
    </>
  );
};

export default Checkout;
