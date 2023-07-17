import React, { useEffect } from "react";

const OrderItem = ({
  OrderItems,
  Otp,
  orderStatus,
  createdAt,
  totalPrice,
  _id,
}) => {
  useEffect(() => {
    window.moveTo(0, 0);
  }, []);

  console.log(OrderItems);

  return (
    <>
      <div className="flex wrap items-center lg:w-full pl-3 mx-auto pb-10 mb-10  hover:border-2 border-2 border-transparent shadow-md shadow-rose-200 md:p-5 rounded-lg hover:border-rose-500 ">
        {OrderItems && <p>Date: {createdAt.toString().substr(0, 10)}</p>}
        {OrderItems &&
          OrderItems.map((item) => {
            return (
              <>
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-left ml-5 mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {item.name} x {item.quantity}
                  </h2>
                  <p className="leading-relaxed text-base">{totalPrice}</p>
                  {Otp && <p>OTP :- {Otp}</p>}
                  <p>{orderStatus}</p>
                  <p>Date: {createdAt}</p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default OrderItem;
