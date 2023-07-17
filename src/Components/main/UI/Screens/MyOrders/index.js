import React from "react";
import OrderItem from "./orderItem";
const MyOrders = () => {
  return (
    <>
      <div className="w-screen text-center py-10 text-5xl font-bold border-b">
        Order History
      </div>
      <div className="grid place-items-center">
        <section className="text-gray-600 body-font w-full md:w-3/4 pb-8 px-5 rounded-xl mt-2 border">
          <div className="px-5 pt-5 pb-24 mx-auto border-[2px] shadow-lg overflow-y-auto rounded-[20px] h-[80vh] m-5">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </section>
      </div>
    </>
  );
};

export default MyOrders;
