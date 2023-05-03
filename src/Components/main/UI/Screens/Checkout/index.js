import React, { useState } from "react";
import nveg from "../../../../../Assets/veg:nonveg/nveg.png";
import veg from "../../../../../Assets/veg:nonveg/veg.png";
const Checkout = () => {
  const [deliveryCheckbox, setDeliveryCheckbox] = useState(0);
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

  return (
    <>
      {" "}
      <div className="h-20 w-full hidden sm:block"></div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium text-center">Order Summary</p>
          <p class="text-gray-400 text-center">
            Check your items. And select a payment method.
          </p>
          <div class="mt-8  rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-row rounded-lg bg-white justify-between">
              <div class="flex flex-col px-4 pb-3">
                <div class="font-bold text-lg flex gap-2">
                  <div>
                    <img className="w-4" src={nveg}></img>
                  </div>
                  <div>Paneer Fried Rice</div>
                </div>
                <p class="font-semibold">Rs 100</p>
                <p>Full</p>
              </div>
              <div className="flex">
                <button>
                  <p className="border py-1 px-3 sm:px-5 sm:py-3">+</p>
                </button>
                <button className="hover:cursor-default">
                  <p className="border py-1 px-3 sm:px-5 sm:py-3">1</p>
                </button>
                <button>
                  <p className="border py-1 px-3 sm:px-5 sm:py-3">-</p>
                </button>
              </div>
            </div>
            <hr />
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
              <form>
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
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div class="h-min mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium text-center">
            {" "}
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
