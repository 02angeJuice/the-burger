import React, { useState, useEffect } from 'react';

import CheckoutSummary from '../../components/order/CheckoutSummary';

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1,
  });

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }

    setIngredients(ingredients);
  }, [props.location.search]);

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
