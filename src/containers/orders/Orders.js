import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler';

import Order from '../../components/order/Order';
import Spinner from '../../components/ui/spinner/Spinner';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchedOrdersFunc() {
      try {
        const res = await axios.get('/orders.json');

        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }

        setOrders(fetchedOrders);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchedOrdersFunc();
  }, []);

  const renderOrders = () => {
    if (!loading) {
      return orders.map(({ id, ingredients, price, orderData }) => {
        return (
          <Order
            key={id}
            ingredients={ingredients}
            price={price}
            data={orderData}
          />
        );
      });
    }

    return <Spinner />;
  };

  return <>{renderOrders()}</>;
};

export default withErrorHandler(Orders, axios);
