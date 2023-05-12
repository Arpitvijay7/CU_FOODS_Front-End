import React, { useState, useRef } from "react";
const MenuItemCard = ({ name, imgLink, price, details, ratings, id }) => {
  const [categ, setCateg] = useState(1);
  const [height, setHeight] = useState("0vh");
  const [config, setConfig] = useState("half");
  const ref = useRef(null);
  const handleAddToCartClick = () => {
    categ ? setCateg(0) : setCateg(1);
    height === "0vh" ? setHeight("27vh") : setHeight("0vh");
  };
  const handleAddToCartAction = async (id) => {
    console.log(config);
    // const res = await fetch(
    //   "http://localhost:4000/api/vi/cart/addToCart/" + id
    // );
    // const data = await res.json();
    // console.log(data);
  };
  return (
    <>
      <div className="h-full p-4 hover:border-2 border-rose-600 rounded-md shadow-xl shadow-rose-100 lg:w-[48%] m-2">
        <div className=" flex items-center justify-between text-center sm:text-left">
          <div className="flex-grow sm:pl-8 text-left">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>
            <p className="text-blue-600">
              &#9733; &#9733; &#9733; &#9733; &#9733; {ratings} ratings
            </p>
            <p className="text-green-600 font-bold text-xl">&#8377; {price}</p>
            <p className="mb-4">{details}</p>
          </div>

          <div className="relative pb-7">
            <img
              alt={name + " photo"}
              className="flex-shrink-0 rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover object-center sm:mb-0 mb-4"
              src={imgLink}
            />
            <button
              onClick={() => handleAddToCartClick()}
              className="absolute top-[63%] left-[8%] md:left-[20%] md:top-[80%] rounded-md"
            >
              <p className="px-2 py-2 rounded bg-rose-500 hover:bg-rose-700 hover:shadow-lg shadow-md font-bold text-md text-white">
                Add To Cart
              </p>
            </button>
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
              Half: &#8377; 50
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
              Full: &#8377; 100
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
          <button
            onClick={() => handleAddToCartAction(id)}
            className="w-full bg-rose-500 text-white text-2xl p-4 rounded mt-2 hover:bg-rose-600 font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
