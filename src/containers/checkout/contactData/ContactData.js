import React, { useState } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

import Spinner from '../../../components/ui/spinner/Spinner';
import Button from '../../../components/ui/button/Button';

const ContactData = (props) => {
  const data = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  const [contact] = useState(data);
  const [loading, setLoading] = useState(false);

  const orderHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const order = {
        ingredients: props.ingredients,
        price: props.price,
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
      await axios.post('/orders.json', order);
      setLoading(false);
      props.history.push('/');
    } catch (error) {
      setLoading(false);
    }
  };

  const renderContactForm = () => {
    if (!loading) {
      console.log(props.ingredients, props.price);

      return (
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button type="Success" clicked={orderHandler}>
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
