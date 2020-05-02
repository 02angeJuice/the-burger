import React, { useState } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

import Spinner from '../../../components/ui/spinner/Spinner';
import Button from '../../../components/ui/button/Button';
import Input from '../../../components/ui/input/Input';

const ContactData = (props) => {
  const scratchForm = {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      value: '',
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
    },
    zipcode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code',
      },
      value: '',
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      value: '',
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
      },
      value: '',
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'normally', displayValue: 'Normally' },
          { value: 'cheapest', displayValue: 'Cheapest' },
          { value: 'fastest', displayValue: 'Fastest' },
        ],
      },
      value: '',
    },
  };

  const [orderForm, setOrderForm] = useState(scratchForm);
  const [loading, setLoading] = useState(false);

  const orderSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {};
    for (let identifier in orderForm) {
      formData[identifier] = orderForm[identifier].value;
    }

    try {
      const order = {
        ingredients: props.ingredients,
        price: props.price,
        orderData: formData,
      };
      await axios.post('/orders.json', order);
      setLoading(false);
      props.history.push('/');
    } catch (error) {
      setLoading(false);
    }
  };

  const inputChangeHandler = (e, inputIdentifier) => {
    const updateOrderForm = {
      ...orderForm,
    };

    const updateFormElement = {
      ...updateOrderForm[inputIdentifier],
    };

    updateFormElement.value = e.target.value;
    updateOrderForm[inputIdentifier] = updateFormElement;
    setOrderForm(updateOrderForm);
  };

  const renderFormInput = () => {
    const formElementArray = [];

    for (let key in orderForm) {
      formElementArray.push({
        id: key,
        config: orderForm[key],
      });
    }

    return formElementArray.map(({ id, config }) => {
      return (
        <Input
          key={id}
          elementType={config.elementType}
          elementConfig={config.elementConfig}
          value={config.value}
          changed={(e) => inputChangeHandler(e, id)}
        />
      );
    });
  };

  const renderContactForm = () => {
    if (!loading) {
      return (
        <form onSubmit={orderSubmitHandler}>
          {renderFormInput()}

          <Button type="Success">Order</Button>
        </form>
      );
    }

    return <Spinner />;
  };

  return (
    <div className={classes.ContactData}>
      <h4>Enter your Contact Data</h4>
      {renderContactForm()}
    </div>
  );
};

export default ContactData;
