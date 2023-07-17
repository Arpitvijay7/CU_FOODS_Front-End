import React, { useEffect } from "react";
const OrderItem = () => {
  useEffect(() => {
    window.moveTo(0, 0);
  }, []);

  return (
    <>
      <div className="lg:w-full pl-3 mx-auto pb-10 mb-10 border-gray-200 hover:border-2 shadow-md md:p-5 rounded-lg">
        <div className="flex justify-between">
          <p>Order id:XXXX</p>
          <p>Order status</p>
        </div>

        <p>Payment Status:XP</p>

        <div className="font-black flex justify-between">
          <div>
            <p>Punjabi Rasoi</p>
            <p>Total Items: 2</p>
            <p>Total Price :1000</p>
          </div>
          <div>
            <p>Address:</p>
            <p>Zakir A 901</p>
          </div>
        </div>
        <p className="text-center font-bold text-3xl">OTP : 109923</p>
        <div className="flex justify-between">
          <p>Order Placed At: 27/1/23 </p>
          <p>Payment Date: 18/1/23</p>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
