import React, { useEffect, useState } from "react";
import CartItem from "./cartItemCard";
import { BASE_URL } from "../../../../Core/API/endpoint";
const Checkout = () => {
  const [deliveryCheckbox, setDeliveryCheckbox] = useState(0);
  const [cartItems,setCartItems]=useState([])
  const [loading,setLoading]=useState(1)
  const hostelData = [
    {
      name: "NC1",
    },
    {
      name: "NC2",
    },
    {
      name: "NC3",
    },
    {
      name: "NC4",
    },
    {
      name: "NC5",
    },
    {
      name: "NC6",
    },
    {
      name: "Zakir A",
    },
    {
      name: "Zakir B",
    },
    {
      name: "Zakir C",
    },
    {
      name: "Zakir D",
    },
  ];
  const [address, setAddress] = useState({
    hostel: "",
    room: "",
  });
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    console.log(name, value);
  };
  const fetchUserCart=async()=>{
    const token=localStorage.getItem("JWT")
    const res=await fetch(`${BASE_URL}cart/getAllfromCart`,{
      headers:{
        "Content-Type": "application/json",
          token,
      }
    })
    const cartData=await res.json();
    if(cartData.message==="Your Cart Items"){
      setCartItems(cartData.cart)
    }
    console.log(cartData) 
    setLoading(0)
  }
   useEffect(() => {
    window.scrollTo(0, 0)
    fetchUserCart();
   }, [])
   
  return (
    <>
      <div className="h-20 w-full hidden sm:block"></div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium text-center">Order Summary</p>
          <p class="text-gray-400 text-center">
            Check your items. And select a payment method.
          </p>


          <div class="mt-4 max-h-[60vh] overflow-y-auto rounded-lg border bg-white px-2 py-4 sm:px-6">
            {loading?<div className="grid place-items-center">
              <svg
                aria-hidden="true"
                class="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>:<>{cartItems && cartItems.map((val,index)=>{
              return <CartItem key={index} name={val.name} price={val.price} option={val.Option} quantity={val.quantity} id={val._id}></CartItem>
            })}</>}
          </div>
          
          <div className="w-full flex justify-center items-center mt-7 bg-gray-50 p-5  rounded-md">
            <input
              className="w-7 h-7 mr-3"
              type="checkbox"
              value={deliveryCheckbox}
              onChange={() =>
                deliveryCheckbox
                  ? setDeliveryCheckbox(0)
                  : setDeliveryCheckbox(1)
              }
              id="checkboxDefault"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="checkboxDefault"
            >
              {" "}
              Want You Food to get delivered to your room?
            </label>
          </div>
          {deliveryCheckbox ? (
            <div className="p-5 mt-5 rounded-lg border  border-black">
              <div>
                <div class="md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Delivery Address
                  </h2>
                  <div class="relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Hostel :
                    </label>
                    <select
                      className="border ml-2 w-9/12 p-3 rounded"
                      name="hostel"
                      value={address.hostel}
                      onChange={(e) => handleAddressChange(e)}
                    >
                      <option defaultChecked>Select Hostel Name</option>
                      {hostelData &&
                        hostelData.map((val, id) => {
                          return <option key={id} value={val.name}>{val.name}</option>;
                        })}
                    </select>
                  </div>
                  <div class="relative mb-4">
                    <label for="number" class="leading-7 text-sm text-gray-600">
                      Room No. :
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="room"
                      min="1"
                      max="9999"
                      value={address.room}
                      onChange={(e) => handleAddressChange(e)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <p class="text-xs text-gray-500 mt-3">
                    In case the mentioned delivery address is not found by our
                    delivery partner. We will not be responsible for it.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div class="h-min mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium text-center">
            <p className="">Bill Summary</p>
          </p>
          <div class="">
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">&#8377; 100.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">GST</p>
                <p class="font-semibold text-gray-900">&#8377; 10.00</p>
              </div>
              {deliveryCheckbox?<div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Delivery</p>
                <p class="font-semibold text-gray-900">&#8377; 10.00</p>
              </div>:null}
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">&#8377; 120.00</p>
            </div>
          </div>
          <button class="mt-4 mb-8 w-full rounded-md bg-rose-600 hover:bg-rose-700 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
