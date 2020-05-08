import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';

import withErrorHandler from '../../withErrorHandler';

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

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/ingredients.json');

        setIngredients(res.data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

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
    const queryParams = [];
    for (const i in ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`
      );
    }

    queryParams.push(`price=${totalPrice.toFixed(1)}`);
    const queryString = queryParams.join('&');

    props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  const renderOrderSummary = () => {
    if (!loading && ingredients) {
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

  const renderBurger = () => {
    if (ingredients) {
      return (
        <>
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
    }

    return <>{error ? <p>Ingredients can't be loaded!</p> : <Spinner />}</>;
  };

  return (
    <>
      <Modal showModal={purchasing} closeModal={purchaseCancelHandler}>
        {renderOrderSummary()}
      </Modal>

      {renderBurger()}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
