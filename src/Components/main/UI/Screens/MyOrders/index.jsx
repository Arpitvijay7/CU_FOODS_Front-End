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
  const [Deliveredorders, setDeliveredOrders] = useState([]);
  const [toogle , setToogle] = useState('live');
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

  useEffect(() => {

    async function fetchOrders() {
      const res = await axios.get(`${BASE_URL}order/myDeliveredOrders`);

      setDeliveredOrders(res.data.orders);
    }

    fetchOrders();
  }, []);

  const getDeliveredOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}order/myDeliveredOrders`);

      setDeliveredOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex mt-4 md:w-[58%] w-full mx-auto justify-evenly border-[1px] border-grey rounded-md">
          <button className={`${toogle === 'live'?'bg-[#F0F2F2]' :''} w-[50%] text-center`} onClick={()=>setToogle('live')}>Live</button>
          <button className={`${toogle === 'Delivered'?'bg-[#F0F2F2]' :''} w-[50%] text-center`} onClick={()=>setToogle('Delivered')}>Delivered</button>
      </div>
      <div className="grid place-items-center w-full">
        <section className="text-gray-600 body-font w-full  pb-20">
          <div className="px-5 pb-24 mx-auto overflow-y-auto  flex flex-col gap-[2.5rem] rounded-[20px] m-5">
            {orders && toogle ==='live' &&
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
                    toogle={toogle}
                  />
                );
              })}
              {Deliveredorders && toogle ==='Delivered' &&
              Deliveredorders.map((order) => {
                return (
                  <OrderItem
                    key={order._id}
                    OrderItems={order.OrderItems}
                    Otp={order.Otp}
                    orderStatus={order.orderStatus}
                    createdAt={order.createdAt}
                    totalPrice={order.totalPrice}
                    _id={order._id}
                    toogle={toogle}
                    review={order.review}
                    getDeliveredOrders={getDeliveredOrders}
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
