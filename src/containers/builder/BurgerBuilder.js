import React, { useState, useEffect } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';
import Controls from '../../components/burger/controls/Controls';

const BurgerBuilder = () => {
  const dummy = {
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0,
  };

  const [ingredients, setIngredients] = useState(dummy);

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <Controls />
    </Aux>
  );
};

export default BurgerBuilder;
