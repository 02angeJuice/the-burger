import React, { useState } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';
import Controls from '../../components/burger/controls/Controls';
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary';

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
};

const initState = {
  bacon: 0,
  cheese: 0,
  meat: 0,
  salad: 0,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(initState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => sum + el, 0);

    setPurchasable(sum > 0);
  };

  const disabledInfo = () => {
    const isDisable = { ...ingredients };

    for (let key in isDisable) isDisable[key] = isDisable[key] <= 0;

    // return true / false
    return isDisable;
  };

  const addIngredientHandler = (type) => {
    const count = ingredients[type];
    const setCount = count + 1;
    const newIngredients = { ...ingredients };

    newIngredients[type] = setCount;
    setIngredients(newIngredients);

    const price = totalPrice;
    const priceAdd = INGREDIENT_PRICES[type];
    const newPrice = price + priceAdd;

    setTotalPrice(newPrice);
    updatePurchaseState(newIngredients);
  };

  const removeIngredientHandler = (type) => {
    const count = ingredients[type];
    let setCount = count - 1;
    if (setCount < 0) return;
    const newIngredients = { ...ingredients };

    newIngredients[type] = setCount;
    setIngredients(newIngredients);

    const price = totalPrice;
    const priceRemove = INGREDIENT_PRICES[type];
    const newPrice = price - priceRemove;
    setTotalPrice(newPrice);
    updatePurchaseState(newIngredients);
  };

  const purchaseHandler = () => setPurchasing(true);
  const purchaseCancelHandler = () => setPurchasing(false);
  const purchaseContinueHandler = () => {
    alert('fucker');
  };
  return (
    <Aux>
      <Modal showModal={purchasing} closeModal={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice.toFixed(1)}
          orderCancel={purchaseCancelHandler}
          orderContinue={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <Controls
        added={addIngredientHandler}
        removed={removeIngredientHandler}
        disabled={disabledInfo()}
        purchasable={purchasable}
        price={totalPrice.toFixed(1)}
        ordered={purchaseHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;
