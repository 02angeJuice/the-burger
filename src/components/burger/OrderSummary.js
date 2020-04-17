import React from 'react';

import Button from '../ui/button/Button';

const OrderSummary = ({ ingredients, price, orderCancel, orderContinue }) => {
  const ingredientSummary = Object.keys(ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:&nbsp;
        {ingredients[key]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {price > 0 ? price : 0}$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={orderCancel} type="Danger">
        Cancel
      </Button>
      <Button clicked={orderContinue} type="Success">
        Continue
      </Button>
    </>
  );
};

export default OrderSummary;
