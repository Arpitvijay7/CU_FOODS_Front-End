import React, { useEffect, useState } from "react";
import CartItem from "./cartItemCard";
import { BASE_URL } from "../../../../Core/API/endpoint";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socketIO from "socket.io-client";
const ENDPOINT = "https://api.cufoodz.com";
let socket;

const Checkout = () => {
  const [deliveryCheckbox, setDeliveryCheckbox] = useState(false);
  const [deliveryData, setDeliveryData] = useState();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderPlacedId, setOrderPlacedId] = useState(0);
  const [shopStatus, setShopStatus] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  useEffect(() => {
    document.title = "Cart";
  }, []);

  useEffect(() => {
    socket = socketIO.connect(ENDPOINT, { transports: ["websocket"] });

    if (orderPlacedId !== 0) {
      console.log("Order Placed");
      socket.emit("orderPlaced", { vendorId: orderPlacedId });
      setOrderPlacedId(0);

      navigate("/myorders?status=placed");
    }
    return () => {
      socket.off();
    };
  }, [orderPlacedId]);

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

  function generateUid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const [address, setAddress] = useState({
    hostel: "",
    room: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const fetchUserCart = async () => {
    const { data: cartData } = await axios(
      `${BASE_URL}cart/getAllfromCart`,
      {}
    );
    if (cartData.message === "Your Cart Items") {
      setCartItems(cartData.cart);
      setTotalPrice(cartData.totalSum);
      setShopStatus(cartData.shopStatus);
      setDeliveryData(cartData.deliveryData);
    }
    console.log(cartData);
    setLoading(0);
  };

  // const handlePayNowPlaceOrderClick = async () => {
  //   if (shopStatus === "closed") {
  //     toast.error("Shop is closed", {
  //       autoClose: 1500,
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   if (!shopStatus) {
  //     toast.error("Cart is Empty", {
  //       autoClose: 1500,
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   const uniqueOrderId = generateUid(20);
  //   console.log(uniqueOrderId);
  //   const res = await axios.post(`${BASE_URL}order/checkout`, {
  //     productId: uniqueOrderId,
  //     phoneNumber,
  //     totalPrice,
  //   });
  //   var options = {
  //     key: "rzp_test_RkPAAly768WLy7",
  //     amount: Number(totalPrice * 100),
  //     currency: "INR",
  //     name: "CU FOODS",
  //     description: "Pay & Checkout",
  //     image: "",
  //     order_id: res.data.id,
  //     handler: async function (response) {
  //       const paymentInfo = {
  //         id: response.razorpay_payment_id,
  //         status: "Payment Successful",
  //       };

  //       const { data } = await axios.post(`${BASE_URL}order/verifyOrder`, {
  //         checkoutRes: response,
  //         orderId: res.data.id,
  //         deliveryCheckbox,
  //         address,
  //         paymentInfo,
  //       });
  //       console.log(data);
  //       if (data.success === true) {
  //         toast.success("Order Placed Successfully", {
  //           autoClose: 1500,
  //           hideProgressBar: true,
  //         });

  //         setOrderPlacedId(data.order.vendor);
  //       } else {
  //         toast.error("Payment Failed", {
  //           autoClose: 1500,
  //           hideProgressBar: true,
  //         });
  //         navigate("/");
  //       }
  //     },
  //     theme: {
  //       color: "#E11D48",
  //     },
  //   };

  //   let razorpayObject = new window.Razorpay(options);
  //   console.log(razorpayObject);
  //   razorpayObject.on("payment.failed", function (response) {
  //     console.log(response);
  //     alert("This step of Payment Failed");
  //   });

  //   razorpayObject.open();
  // };
  const handlePlaceOrderClick = async () => {
    if (shopStatus === "closed") {
      toast.error("Shop is closed", {
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }

    if (!shopStatus) {
      toast.error("Cart is Empty", {
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }

    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Phone Number required ", {
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }

    if (deliveryCheckbox && !address.hostel && !address.room) {
      toast.error("Select address properly ", {
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }
    if (!deliveryCheckbox && !address.hostel) {
      toast.error("Select proper location ", {
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }
    setConfirmModalOpen(true);
  };
  const placeOrderViaCod = async (e) => {
    e.preventDefault();
    const getAddress = () => {
      if (deliveryCheckbox) {
        return {
          hostel: address.hostel,
          room: address.room,
        };
      }
      return {
        hostel: address.hostel,
        room: "000",
      };
    };
    const data1 = {
      deliveryCheckbox: true,
      address: getAddress(),
      paymentInfo: {
        id: "COD",
        status: "COD",
      },
      phoneNumber,
    };
    const data = await axios.post(`${BASE_URL}order/OrderviaCash`, data1);
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserCart();
  }, []);

  useEffect(() => {
    if (deliveryCheckbox) {
      setTotalPrice((prev) => prev + 10);
    } else {
      setTotalPrice((prev) => prev - 10);
    }
  }, [deliveryCheckbox]);

  console.log(cartItems);
  return (
    <>
      <div className="h-20 w-full hidden sm:block"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium text-center">Order Summary</p>
          <p className="text-gray-400 text-center">
            Check your items. And select a payment method.
          </p>
          <div className="mt-4 max-h-[60vh] overflow-y-auto rounded-lg border bg-white px-2 py-4 sm:px-6">
            {loading ? (
              <div className="grid place-items-center">
                <svg
                  aria-hidden="true"
                  className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
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
              </div>
            ) : (
              <>
                {cartItems &&
                  cartItems.map((val, index) => {
                    return (
                      <CartItem
                        deliveryCheckbox={deliveryCheckbox}
                        setTotalAmount={setTotalPrice}
                        key={index}
                        name={val.name}
                        price={val.price}
                        option={val.Option}
                        quantity={val.quantity}
                        id={val.foodId}
                      ></CartItem>
                    );
                  })}
              </>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-7 border  p-5  rounded-md">
            <div className="flex justify-start items-start w-full">
              <label className="h-full pl-[0.15rem] flex justify-center items-center hover:cursor-pointer">
                Phone Number :
              </label>
              <input
                className="w-[70%] ml-3 border border-gray-300 h-10 rounded p-5"
                type="number"
                maxLength={10}
                placeholder="9876543210"
                value={phoneNumber}
                required
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (inputValue.length <= 10) {
                    setPhoneNumber(inputValue);
                  }
                }}
                id="checkboxDefault"
              />
            </div>
            {phoneNumber.length < 10 && (
              <h5 className="text-xs text-right px-7 font-bold pb-5 w-full text-rose-500">
                * minimum 10 digits required
              </h5>
            )}

            <p className="text-xs  mt-3 text-rose-500">
              Please ensure the accuracy of your provided phone number, as any
              errors may impact the success of your delivery. We will not be
              responsible in that case.
            </p>
          </div>

          {!deliveryCheckbox && (
            <div className="p-5 mt-5 rounded-lg border  border-black">
              <div>
                <div className="md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0">
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Delivery / Pickup
                  </h2>
                  <div className="relative mb-4">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Location :
                    </label>
                    <select
                      className="border ml-2 w-9/12 p-3 rounded"
                      name="hostel"
                      value={address.hostel}
                      onChange={(e) => handleAddressChange(e)}
                    >
                      <option value="" selected disabled>
                        Select Hostel Name
                      </option>
                      {deliveryData &&
                        deliveryData.deliveryLocations.map((val, id) => {
                          return (
                            <option key={id} value={val}>
                              {val}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {deliveryData && !deliveryData.roomDelivery && (
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
          )}
          {deliveryCheckbox ? (
            <div className="p-5 mt-5 rounded-lg border  border-black">
              <div>
                <div className="md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Delivery Address
                  </h2>
                  <div className="relative mb-4">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
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
                          return (
                            <option key={id} value={val.name}>
                              {val.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="relative mb-4">
                    <label
                      for="number"
                      className="leading-7 text-sm text-gray-600"
                    >
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
                      className="w-[70%] ml-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
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
        <div className="h-min mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium text-center">
            <p className="">Bill Summary</p>
          </p>
          <div className="">
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">
                  &#8377; {totalPrice}
                </p>
              </div>
              {deliveryCheckbox ? (
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Delivery</p>
                  <p className="font-semibold text-gray-900">&#8377; 10.00</p>
                </div>
              ) : null}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                &#8377; {totalPrice}
                .00
              </p>
            </div>
          </div>
          <button
            onClick={() => handlePlaceOrderClick()}
            className="mt-4 mb-8 w-full rounded-md bg-rose-600 hover:bg-rose-700 px-6 py-3 font-medium text-white"
          >
            Place Order via COD
          </button>
        </div>
      </div>
      <ToastContainer autoClose={1500} hideProgressBar={true} />
      {confirmModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Confirm Order
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please recheck your phone number :{" "}
                        <span className="font-bold">{phoneNumber}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Order Value : {totalPrice}
                        <br />
                        Order Address : {`${address.hostel}  ${address.room}`}
                      </p>
                      <p className="text-sm text-gray-500 border-t">
                        Do you want to Proceed?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={(e) => placeOrderViaCod(e)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Proceed
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmModalOpen(false)}
                  className="mt-2 md:mt-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
