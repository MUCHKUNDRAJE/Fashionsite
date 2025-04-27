import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Loader from '../components/loader';
import OrderCard from '../components/order-card';

function Order() {
  const [Order, setOrder] = useState([]);

  useEffect(() => {
    const OrderItems = JSON.parse(localStorage.getItem("Order"));
      setOrder(OrderItems);
  }, []);  // Added dependency array
  
 
  return (
    <>
      <Loader />
      <Nav />
      <div className="min-h-screen w-full py-24">
      <h1 className='ml-10 mb-2 text-2xl font-bold'> Your Order</h1>
        <div className="min-h-96 w-full flex flex-col gap-2 items-center justify-center">
          {Order && Order.length === 0 ? (
            <h1 className="text-2xl text-red-600">No Order Found</h1>
          ) : (
            Order.map((item, index) => (
              <OrderCard
                key={index}
                name={item.name}
                prize={item.prize}
                image={item.img}
                id={item.ID}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Order;
