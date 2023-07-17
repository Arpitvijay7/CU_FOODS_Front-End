import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../../../Core/API/endpoint";
import OrderItem from "./orderItem";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchOrders() {
      const res = await axios.get(`${BASE_URL}order/myOrders`);
      setOrders(res.data.orders);
    }

    fetchOrders();
  }, []);
  console.log(orders);

  return (
    <>
      {" "}
      <div className="w-screen text-center py-10 text-5xl font-bold border-b bg-rose-50 text-rose-600 shadow-xl">
        {" "}
        My Orders{" "}
      </div>
      <div className="grid place-items-center">
        <section className="text-gray-600 body-font w-full md:w-3/4 pb-20">
          <div className="px-5 pt-5 pb-24 mx-auto border-[10px] overflow-y-auto border-rose-600 rounded-[20px] h-[80vh] m-5">
            {orders &&
              orders.map((order) => {
                return (
                  <OrderItem
                    key={order._id}
                    OrderItems={order.OrderItems}
                    Otp={order.Otp}
                    orderStatus={order.orderStatus}
                    createdAt={order.createdAt}
                    totalPrice={order.totalPrice}
                    _id={order._id}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default MyOrders;
