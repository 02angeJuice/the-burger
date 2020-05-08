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
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipcode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code',
      },
      value: '',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
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
      value: 'normally',
      validation: {},
      valid: true,
    },
  };

  const [orderForm, setOrderForm] = useState(scratchForm);
  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

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

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }

    return isValid;
  };

  const inputChangeHandler = (e, inputIdentifier) => {
    const updateOrderForm = {
      ...orderForm,
    };

    const updateFormElement = {
      ...updateOrderForm[inputIdentifier],
    };

    updateFormElement.value = e.target.value;
    updateFormElement.valid = checkValidity(
      updateFormElement.value,
      updateFormElement.validation
    );
    updateFormElement.touched = true;
    updateOrderForm[inputIdentifier] = updateFormElement;

    let formIsValid = true;

    for (const inputIdentifier in updateOrderForm) {
      formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid;
    }

    setFormIsValid(formIsValid);
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
          invalid={!config.valid}
          shouldValidate={config.validation}
          touched={config.touched}
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

          <Button type="Success" disabled={!formIsValid}>
            Order
          </Button>
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
