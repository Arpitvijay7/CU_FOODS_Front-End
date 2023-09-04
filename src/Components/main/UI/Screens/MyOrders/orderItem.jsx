import React, { useEffect } from "react";
import { format } from "date-fns";
import "./styles.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../Core/API/endpoint";
import axios from "axios";
import { useDispatch } from "react-redux";

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
  toogle,
  review,
  getDeliveredOrders,
}) => {
  useEffect(() => {
    window.moveTo(0, 0);
  }, []);

  const formattedDate = formatDate(createdAt.toString().substr(0, 10));
  const dispatch = useDispatch();

  const HandleRatingChange = async (e, item) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${BASE_URL}food/rate/${item.foodId}/${_id}${
          item.Option ? `?option=${item.Option}` : ""
        }`,
        {
          rating: e.target.value,
        }
      );

      getDeliveredOrders();
    } catch (error) {
      if (e.respose) {
        toast.error(error.response.data.message, {
          autoClose: 1000,
          hideProgressBar: true,
        });
      } else {
        toast.error("Internal Server Error", {
          autoClose: 1000,
          hideProgressBar: true,
        });
      }
    }
  };

  const badgestyle = {
    clipPath: "polygon(40% 50%, 100% 100%, 100% 0)",
    width: "20px",
    height: "100%",
    backgroundColor: "#F0F2F2 !important"  ,
    color: "white",
    position: "absolute",
    right: "0",
  };

  return (
    <>
      <div className="md:w-[60%] md:mx-auto rounded-md border-[1px] border-[#D5D9D9]">
        <div className="flex flex-col ">
          <div className="flex justify-between rounded-t-md p-4 border-b-[1px] border-b-[#D5D9D9] text-[#565959] bg-[#F0F2F2]">
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
              {!Otp && (
                <div className="flex justify-end mt-[-0.5rem] overflow-hidden space-x-[1.5px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="18px"
                      height="100%"
                      viewBox="0 0 128 128"
                      style={{
                        fill: "#fff",
                        backgroundColor: "crimson",
                        padding: "1px",
                      }}
                    >
                      <path d="M120.673,72.083a8.87,8.87,0,0,0-1.476-7.772c-.334-.4-.676-.79-1.011-1.172a7.967,7.967,0,0,0-8.293-2.357c-.035.011-.07.024-.1.036l-2.639,1.025c-.013,0-.024.013-.037.019-.577-.259-1.169-.513-1.782-.762,0-.009,2.277-9.958-5.261-10.64h3.36a1.547,1.547,0,0,0,1.5-1.6V20.19a1.554,1.554,0,0,0-1.5-1.6H90.85V31.64a.9.9,0,0,1-1.29.81l-2.94-1.64a.907.907,0,0,0-1.17-.01l-2.97,1.65a.891.891,0,0,1-1.28-.81V18.59H68.62a1.554,1.554,0,0,0-1.5,1.6V48.86a1.546,1.546,0,0,0,1.49,1.6h1.459a4.036,4.036,0,0,0-3.4,4.019c0,4.054,1.779,4.99,4.711,6.621h0a20.888,20.888,0,0,1,3.99,12.79,30.867,30.867,0,0,1-.9,7.24,3.377,3.377,0,0,1-3.27,2.58H45.15c-1.24,0-6.34-6.41-9.6-11.81-1.02-1.69,2.32-10.74,4.31-15.91,3.574-9.255,5.687-17.705,5.525-23.325l4.48-3.675a3.689,3.689,0,0,0,1.857,1.552,2.8,2.8,0,0,0,.908.151,3.016,3.016,0,0,0,1.9-.705c1.657-1.344,2.4-4.484,1.736-7.3a4.722,4.722,0,0,0-2.724-3.634,2.912,2.912,0,0,0-2.809.553c-1.471,1.195-2.219,3.805-1.9,6.349l-3.95,3.24c-.005-.017-.009-.038-.014-.055A10.826,10.826,0,0,0,34.7,21.33c-.11,0-.227.011-.34.014a6.8,6.8,0,0,0-4.81,1.836,9.479,9.479,0,0,0-2.9,7.171c0,5.354,2.092,9.532,5.075,10.158a3.718,3.718,0,0,0,.467.076,7.352,7.352,0,0,0,1.025.068,10.49,10.49,0,0,0,1.731-.154,21.982,21.982,0,0,0,3.866-1.07C36.2,45.306,28.27,63.291,25.24,71.46a2.926,2.926,0,0,0-.027,1.96A21.372,21.372,0,0,0,2.807,81.187,2.244,2.244,0,0,0,4.03,84.729L8.615,85.89A14.4,14.4,0,1,0,34.17,95a14.494,14.494,0,0,0-.263-2.71l4.382,1.11a2.235,2.235,0,0,0,2.757-1.856l.034,0H88.187a14.4,14.4,0,1,0,27.939,0h7.294a2.24,2.24,0,0,0,2.24-2.31C125.522,85.748,125.676,78.822,120.673,72.083ZM32.624,37.61c-.03,0-.064,0-.094-.005a1.234,1.234,0,0,1-.178-.029c-1.307-.274-2.706-3.243-2.706-7.225A6.537,6.537,0,0,1,31.564,25.4a4.221,4.221,0,0,1,1.457-.873A66.016,66.016,0,0,1,32.624,37.61ZM19.766,100.445A5.442,5.442,0,1,1,25.208,95,5.441,5.441,0,0,1,19.766,100.445ZM84.99,66.679h15.816a1.5,1.5,0,1,1,0,3H84.99a1.5,1.5,0,1,1,0-3Zm0,8.023a1.5,1.5,0,0,1,0-3h15.816a1.5,1.5,0,0,1,0,3Zm17.166,25.743a5.441,5.441,0,0,1-4.2-8.895h8.409a5.441,5.441,0,0,1-4.2,8.895Zm8.573-36.773.091-.035a4.965,4.965,0,0,1,5.114,1.484c.322.366.65.745.969,1.124a5.147,5.147,0,0,1,1.063,2.746A33.732,33.732,0,0,0,110.729,63.672Z"></path>
                    </svg>
                  </div>

                  <div className="flex relative">
                    <div className="flex mt-[-3px] items-center ps-3 text-white w-[6rem] text-[13px] font-bold bg-[crimson]">
                      DELIVERY
                    </div>
                    <div style={badgestyle}></div>
                  </div>
                </div>
              )}

              {Otp && (
                <div className="flex justify-end mt-[-0.5rem] overflow-hidden space-x-[1.5px]">
                  <div className="bg-[#32741E] box-border w-[18px]">
                    <svg
                      className="mx-auto my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16px"
                      height="85%"
                      viewBox="0,0,256,256"
                      style={{ fill: "#000000" }}
                    >
                      <g
                        fill="#ffffff"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style={{ "mix-blend-mode": "normal" }}
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M42,21h-34c-1.654,0 -3,1.346 -3,3v23c0,1.654 1.346,3 3,3h34c1.654,0 3,-1.346 3,-3v-23c0,-1.654 -1.346,-3 -3,-3zM13,38c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM21,38c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM29,38c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,38c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM12,19v-4.01c0,-7.163 5.827,-12.99 12.99,-12.99h0.02c7.163,0 12.99,5.827 12.99,12.99v4.01h-2v-4.01c0,-6.06 -4.931,-10.99 -10.99,-10.99h-0.02c-6.059,0 -10.99,4.93 -10.99,10.99v4.01z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div className="flex relative">
                    <div className="flex mt-[-3px] items-center ps-3 text-white w-[6rem] text-[13px] font-bold bg-[#32741E]">
                      OTP
                    </div>
                    <div style={badgestyle}></div>
                  </div>
                </div>
              )}
              <p className="md:block hidden text-[12px] font-semibold">
                ORDER # {_id}
              </p>
            </div>
          </div>
          <div>
            {OrderItems &&
              OrderItems.map((item) => {
                return (
                  <div className="p-5 relative flex gap-4 space-x-6 ">
                    <div className="flex flex-col  gap-3">
                      <p className="inline  text-[#007600] text-[1.25rem] leading-[1.5rem] font-[700]">
                        {orderStatus}
                      </p>
                      <img
                        className="w-[100px] h-[100px]"
                        src={item.image && item.image.path}
                        alt="food image"
                      />
                    </div>
                    <div className="flex flex-wrap md:space-x-20 ">
                      <div className="w-max h-max">
                        <p>{item.name}</p>
                        <p>Quantity : {item.quantity}</p>
                        <p>{item.shopName}</p>
                        {item.Option && <p>Option : {item.Option}</p>}
                      </div>

                      <div className="md:flex md:justify-end md:flex-col md:h-[136px] h-max">
                        {toogle === "Delivered" && (
                          <Stack spacing={1}>
                            <Rating
                              name="size-large"
                              defaultValue={
                                item.review && item.review.rating
                                  ? item.review.rating
                                  : 0
                              }
                              readOnly={item.review ? true : false}
                              size="large"
                              onChange={(e) => HandleRatingChange(e, item)}
                            />
                          </Stack>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {Otp && (
            <div className="flex justify-between rounded-b-md p-4 border-t-[1px] border-t-[#D5D9D9] text-[#565959] bg-[#F0F2F2]">
              OTP : {Otp}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderItem;
