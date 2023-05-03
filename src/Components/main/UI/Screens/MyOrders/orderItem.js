import React,{useEffect} from "react";
const OrderItem = () => {
  useEffect(() => {
    window.moveTo(0,0)
  }, [])
  
  return (
    <>
      <div className="flex items-center lg:w-full pl-3 mx-auto pb-10 mb-10 border-gray-200 hover:border-2 shadow-md shadow-rose-200 md:p-5 rounded-lg border-rose-500">
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
            Chole Bhature x 2
          </h2>
          <p className="leading-relaxed text-base">
            Rs 146
          </p>
          <p>OTP  :  20313</p>
          <p>Status : Delivered</p>
          <p>Date: 19 May, 2023</p>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
