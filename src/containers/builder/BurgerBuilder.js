import React, { useState } from 'react';
import axios from '../../axios-orders';

import Burger from '../../components/burger/Burger';
import Controls from '../../components/burger/controls/Controls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary';
import Spinner from '../../components/ui/spinner/Spinner';

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
};

const initState = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(initState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

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
  const purchaseContinueHandler = async () => {
    setLoading(true);
    try {
      const order = {
        ingresients: ingredients,
        price: totalPrice,
        customer: {
          name: 'banndit',
          address: {
            street: 'Bangpli',
            zipcode: '10540',
            country: 'Thailand',
          },
          email: 'test@test.com',
        },
        deliveryMethod: 'fastest',
      };

      const res = await axios.post('/orders.json', order);
      setLoading(false);
      setPurchasing(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      setPurchasing(false);
      return console.log(error);
    }
  };

  const renderOrderSummary = () => {
    if (!loading) {
      return (
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice.toFixed(1)}
          orderCancel={purchaseCancelHandler}
          orderContinue={purchaseContinueHandler}
        />
      );
    }

    return <Spinner />;
  };

  return (
    <>
      <Modal showModal={purchasing} closeModal={purchaseCancelHandler}>
        {renderOrderSummary()}
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
    </>
  );
};

export default BurgerBuilder;
