import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/order/CheckoutSummary';
import ContactData from './contactData/ContactData';

const Checkout = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    if (props.location.search) {
      const query = new URLSearchParams(props.location.search);
      const ingredients = {};
      let price = 0;

      for (let param of query.entries()) {
        if (param[0] === 'price') {
          price = param[1];
        } else {
          ingredients[param[0]] = +param[1];
        }
      }

      setIngredients(ingredients);
      setTotalPrice(price);
    }
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
      <Route
        path={`${props.match.path}/contact-data`}
        render={(props) => (
          <ContactData
            ingredients={ingredients}
            price={totalPrice}
            {...props}
          />
        )}
      />
    </>
  );
};

export default Checkout;
