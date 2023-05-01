import React from "react";
import nveg from "../../../../../Assets/veg:nonveg/nveg.png";
import veg from "../../../../../Assets/veg:nonveg/veg.png";
const Checkout = () => {
  return (
    <>  <div className="h-20 w-full hidden sm:block"></div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium text-center">Order Summary</p>
          <p class="text-gray-400 text-center">
            Check your items. And select a payment method.
          </p>
          <div class="mt-8  rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-row rounded-lg bg-white justify-between">
              <div class="flex flex-col px-4">
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
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium text-center"> <p className="">Bill Summary</p></p>
          <div class="">
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">$399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
