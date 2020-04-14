import React from 'react';
import classes from './Burger.css';

import Ingredient from './Ingredient';

const Burger = ({ ingredients }) => {
  let burgerIngredients = Object.keys(ingredients)
    .map((key) => {
      return [...Array(ingredients[key])].map((_, i) => {
        return <Ingredient key={key + i} type={key.toUpperCase()} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="BREAD_TOP" />
      {burgerIngredients}
      <Ingredient type="BREAD_BOTTOM" />
    </div>
  );
};

export default Burger;
