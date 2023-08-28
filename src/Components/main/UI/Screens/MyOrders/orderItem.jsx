import React, { useEffect } from "react";
import { format } from "date-fns";
import "./styles.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMM yyyy"); // '15 Aug 2023'
};

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
  const formattedDate = formatDate(createdAt.toString().substr(0, 10));

  return (
    <>
      <div className="md:w-[60%] md:mx-auto rounded-md border-[1px] border-[#D5D9D9]">
        <div className="flex flex-col ">
          <div className="flex justify-between rounded-t-md p-4 border-b-[1px] border-b-[#D5D9D9] text-[#565959] md:bg-[#F0F2F2]">
            <div className="flex space-x-7 leading-4 font-semibold">
              <p className="flex flex-col text-[12px]">
                ORDER PLACED{" "}
                <span className="text-[14px]">{formattedDate}</span>
              </p>
              <p className="flex flex-col text-[12px]">
                TOTAL <span className="text-[14px]">₹{totalPrice}</span>
              </p>
            </div>
            <div>
              {/* <div className="text-white text-[11px] font-bold leading-[1px] pr-[1.875rem] max-h-[20px] items-center whitespace-nowrap before:content-[''] before:custom-clip">
                <div className="h-[20px] bg-[#2F56BC] p-[4px] my-[-4px] mr-[10px] w-[20px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"

                    className="bg-white block h-full object-contain overflow-visible w-100%"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.205 1L0 4.673l6.794 7.608L14 4.683 10.808 1H3.205zm6.028.895h1.136l2.014 2.308h-2.287l-.864-2.308zm-3.505 0h2.536l.863 2.308H4.863l.865-2.308zm-2.105 0H4.76l-.864 2.308H1.608l2.014-2.308zm6.43 3.204h2.18l-4.397 4.976L10.053 5.1zm-5.13 0h4.1l-2.19 4.93-1.91-4.93zm-3.212 0h2.212l1.933 4.98L1.71 5.1z"
                    ></path>
                  </svg>
                  OTP
                </div>
              </div> */}
              <p className="md:block hidden text-[12px] font-semibold">
                ORDER # {_id}
              </p>
            </div>
          </div>
          <div>
            {OrderItems &&
              OrderItems.map((item) => {
                return (
                  <div className="p-5 flex gap-4 space-x-6">
                    <div className="flex flex-col gap-3">
                      <p className="inline  text-[#007600] text-[1.25rem] leading-[1.5rem] font-[700]">
                        Preparing
                      </p>
                      <img
                        className="w-[100px] h-[100px]"
                        src={item.image && item.image.path}
                        alt="food image"
                      />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>Quantity : {item.quantity}</p>
                      <p>{item.shopName}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          {Otp && (
            <div className="flex justify-between rounded-b-md p-4 border-t-[1px] border-t-[#D5D9D9] text-[#565959] md:bg-[#F0F2F2]">OTP : {Otp}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderItem;
