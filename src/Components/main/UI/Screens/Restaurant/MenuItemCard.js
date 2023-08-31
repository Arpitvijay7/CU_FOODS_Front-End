import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../Core/API/endpoint";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuItemCard = ({
  name,
  imgLink,
  price,
  details,
  ratings,
  id,
  dualOption,
  price_half,
  price_full,
  shop,
}) => {
  const [categ, setCateg] = useState(1);
  const [height, setHeight] = useState("0vh");
  const [config, setConfig] = useState("half");
  const [loading, setLoading] = useState(0);
  const [added, setAdded] = useState(0);
  const [replaceCartToggle, setReplaceCartToggle] = useState(0);

  const navigate = useNavigate();

  const ref = useRef(null);
  const handleAddToCartClick = () => {
    categ ? setCateg(0) : setCateg(1);
    height === "0vh" ? setHeight("100%") : setHeight("0vh");
  };
  const handleReplaceCartAcceptance = async () => {
    const { data } = await axios(
      `${BASE_URL}cart/replaceFromCart/${id}/${config}`
    );
    if (data.message === "Items replaced in cart Sucessfully") {
      setLoading(0);
      setAdded(1);
    }
    setReplaceCartToggle(0);
  };
  const handleReplaceCartRejection = () => {
    setReplaceCartToggle(0);
  };

  const handleAddToCartAction = async () => {
    setLoading(1);
    const item = {
      name,
      option: config,
      price: config == "half" ? (price_half ? price_half : price) : price_full,
      quantity: 1,
      shop,
    };
    try {
      const { data } = await axios.get(
        `${BASE_URL}cart/addToCart/${id}/${config}`
      );
      if (
        data.message === "Item Successfully added in Cart" ||
        data.status === 200
      ) {
        setAdded(1);
        setLoading(0);
      } else if (
        data.message ==
        "You Already have a item in cart from diffrent shop remove them to add this item"
      ) {
        setReplaceCartToggle(1);
      }
    } catch (err) {
      console.log(err.response.data.message);
      setLoading(0);
      toast.error(err.response.data.message, {
        autoClose: 1500,
        hideProgressBar: true,
      });
      navigate("/?notauth=true");
    }
  };
  return (
    <>
      <div className="h-full w-full md:w-[47%] lg:w-[30%] p-4 border-2 border-transparent hover:border-rose-600 rounded-md shadow-xl shadow-rose-100 col-span-1 m-2">
        <div className=" flex items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex-grow sm:pl-8 text-left">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>
            <p className="text-blue-600">
              &#9733; &#9733; &#9733; &#9733; &#9733; {ratings} Ratings
            </p>
            <p className="text-green-600 font-bold text-xl">
              &#8377; {price_half ? price_half : price}
            </p>
            <p className="mb-4">{details}</p>
          </div>

          <div className="relative pb-7 z-0">
            <img
              alt={name + " photo"}
              className="flex-shrink-0 rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover object-center sm:mb-0 mb-4"
              src={imgLink}
            />
            {added ? (
              <Link
                to={"/checkout"}
                className="absolute top-[63%] left-[8%] md:left-[20%] md:top-[80%] rounded-md"
              >
                <p className="px-2 py-2 rounded bg-rose-500 hover:bg-rose-700 hover:shadow-lg shadow-md font-bold text-md text-white">
                  View Cart
                </p>
              </Link>
            ) : (
              <button
                onClick={
                  dualOption
                    ? () => handleAddToCartClick()
                    : () => handleAddToCartAction()
                }
                className="absolute top-[63%] left-[8%] md:left-[20%] md:top-[80%] rounded-md"
              >
                <p className="px-2 py-2 rounded bg-rose-500 hover:bg-rose-700 hover:shadow-lg shadow-md font-bold text-md text-white">
                  Add To Cart
                </p>
              </button>
            )}
          </div>
        </div>
        <div
          ref={ref}
          style={{
            height,
            transition: "height 0.3s ease-in-out",
          }}
          className="flex flex-col overflow-hidden"
        >
          <div className="w-full border border-rose-400 rounded-lg my-1 p-4 flex justify-between">
            <label
              for="half"
              class="ml-2 text-gray-700 text-lg sm:text-2xl font-semibold"
            >
              Half: &#8377; {price_half}
            </label>
            <input
              type="radio"
              id="half"
              value="half"
              name="item"
              className="w-7 h-7 mr-2"
              onClick={() => setConfig("half")}
            />
          </div>
          <div className="w-full border border-rose-400 rounded-lg my-1 p-4 flex justify-between">
            <label
              for="full"
              class="ml-2 text-gray-700 text-lg sm:text-2xl font-semibold"
            >
              Full: &#8377; {price_full}
            </label>
            <input
              type="radio"
              id="full"
              value="full"
              name="item"
              className="w-7 h-7 mr-2"
              onClick={() => setConfig("full")}
            />
          </div>
          {loading ? (
            <div className="w-full bg-rose-500 text-white text-2xl p-4 rounded mt-2 grid place-items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-rose-600"
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
                <span class="">Adding to Cart...</span>
              </div>
            </div>
          ) : (
            <>
              {added ? (
                <Link
                  to="/checkout"
                  className="w-full bg-rose-500 text-white text-2xl p-4 rounded mt-2 hover:bg-rose-600 font-bold"
                >
                  View Cart
                </Link>
              ) : (
                <button
                  onClick={() => handleAddToCartAction(id)}
                  className="w-full bg-rose-500 text-white text-2xl p-4 rounded mt-2 hover:bg-rose-600 font-bold"
                >
                  Continue
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {replaceCartToggle ? (
        <div className="backdrop-blur w-screen h-screen fixed top-0 left-0 right-0 grid place-items-center">
          <div className="h-max w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-white border-2 rounded-lg border-rose-400 shadow-xl py-10 px-10 md:px-20">
            <div className="font-bold text-xl text-center">
              There is already an item from different shop. Do you want to
              replace them?
            </div>
            <div className="flex justify-between mt-10">
              <button
                onClick={() => handleReplaceCartRejection()}
                className="bg-white hover:bg-rose-600 border-2 border-red-600 hover:text-white w-[45%] rounded-lg h-14"
              >
                No
              </button>
              <button
                onClick={() => handleReplaceCartAcceptance()}
                className="bg-white hover:bg-rose-600 border-2 border-red-600 hover:text-white w-[45%] rounded-lg h-14"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </>
  );
};

export default MenuItemCard;
