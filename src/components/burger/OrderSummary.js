import React from 'react';

import Aux from '../../hoc/Aux';

const OrderSummary = ({ ingredients, price }) => {
  const ingredientSummary = Object.keys(ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:&nbsp;
        {ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {price > 0 ? price : 0}$</p>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
