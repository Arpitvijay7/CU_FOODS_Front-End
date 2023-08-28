import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../../../Core/API/endpoint";
import OrderItem from "./orderItem.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const status = queryParams.get("status");
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "placed") {
      toast.success("Order Placed Successfully", {
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
    
    setTimeout(() => {
      navigate("/myorders")
    } ,1500)
  }, []);

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
      <div className="flex mt-4 md:w-[58%] mx-auto justify-evenly border-[1px] border-grey rounded-md">
          <button className="hover:bg-[#F0F2F2] w-[50%] text-center">Live</button>
          <button className="hover:bg-[#F0F2F2] w-[50%] text-center">Delivered</button>
      </div>
      <div className="grid place-items-center">
        <section className="text-gray-600 body-font w-full  pb-20">
          <div className="px-5 pb-24 mx-auto overflow-y-auto  flex flex-col gap-[2.5rem] rounded-[20px] m-5">
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
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </>
  );
};

export default MyOrders;
