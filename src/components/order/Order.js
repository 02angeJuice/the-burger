import React from 'react';
import classes from './Order.css';

const Order = ({ ingredients, price }) => {
  const list = [];

  for (const name in ingredients) {
    list.push({
      name: name,
      amount: ingredients[name],
    });
  }

  const renderIngredientList = () => {
    return list.map(({ name, amount }) => {
      if (amount > 0) {
        return (
          <span
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px',
            }}
            key={name}
          >
            {`${name} (${amount})`}
          </span>
        );
      }

      return null;
    });
  };

  return (
    <div className={classes.Order}>
      <p>Ingredients: {renderIngredientList()}</p>

      <p>
        Price: <strong>{price}$</strong>
      </p>
    </div>
  );
};

export default Order;
