import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../../Core/API/endpoint";
import numeral from "numeral";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Banner = ({ id, setSearch, search }) => {
  const searchBarRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const [shop, setShop] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [cardColor, setCardColor] = useState("");

  useEffect(() => {
    if (ratingValue > 3.5 && ratingValue <= 4.5) {
      setCardColor("bg-lime-400");
    } else if (ratingValue > 4.5) {
      setCardColor("bg-green-700");
    } else if (ratingValue > 2.5 && ratingValue <= 3.5) {
      setCardColor("bg-yellow-300");
    } else if (ratingValue <= 2.5) {
      setCardColor("bg-red-600");
    }
  }, [ratingValue]);

  useEffect(() => {
    if (!shop) return;
    document.title = shop.name;
  }, [shop]);

  const copyTextToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleShareClick = () => {
    const textToCopy = `Look at this amazing restaurant on Cu-Foodz ${currentURL}`;

    // Copy the text to the clipboard
    copyTextToClipboard(textToCopy);
    toast.success("Copied to clipboard");

    // Check if the share API is available and use it for mobile sharing
    if (navigator.share) {
      navigator
        .share({
          title: `${shop.name}`,
          text: textToCopy,
          url: window.location.href,
        })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    }
  };
  const fetchShop = async () => {
    const { data } = await axios(`${BASE_URL}shop/getShopDetail/${id}`);
    if (data.success) {
      setShop(data.shop);
    }
  };
  useEffect(() => {
    fetchShop();
  }, [id]);

  useEffect(() => {
    // Update the ratingValue whenever 'shop' changes
    if (shop.rating) {
      setRatingValue(shop.rating.avgRating || 0);
    }
  }, [shop]);

  const numberOfReviews = shop.rating ? shop.rating.numofReviews : 0;
  // Check if there are decimal places, and format accordingly
  const formatedNoOfReviews =
    numberOfReviews < 1000
      ? numeral(numberOfReviews).format("0a")
      : numeral(numberOfReviews).format(
          `0.0a${numberOfReviews % 1000 === 0 ? "" : "+"}`
        );
  return (
    <>
      <div
        className="w-screen flex flex-col border-t z-10 px-2"
        style={{
          background: "white",
        }}
      >
        <div className="pt-10 sm:pt-0 hidden md:block">
          <div className="px-4 rounded-lg md:mt-0 md:rounded-none w-full flex justify-between">
            <div className="md:w-[30vw] md:pt-3">
              <h2 className="text-gray-900 title-font text-2xl font-bold pb-2">
                {shop.name}
              </h2>
              <h3 className="text-gray-800 md:text-lg tracking-widest title-font mb-1 font-semibold">
                {shop.description}
              </h3>
            </div>
            <div className="w-max md:ml-5 h-max text-center  rounded-md text-sm md:text-lg font-bold md:p-5">
              <div className="flex gap-[2px]">
                <Stack spacing={1}>
                  <Rating
                    name="size-medium"
                    value={parseFloat(ratingValue)}
                    readOnly
                    precision={0.1}
                  />
                </Stack>
                <p className="text-[16px] text-slate-600 relative top-[2px] md:top-[-2px] text-bold flex flex-col justify-start">
                  {shop.rating ? shop.rating.avgRating : 0}
                </p>
              </div>

              <p className="text-[16px] text-slate-600 text-bold">
                {formatedNoOfReviews ? formatedNoOfReviews : 0} reviews
              </p>
            </div>
          </div>
        </div>
        {/* //Mobile header */}
        <div className="py-5 md:hidden">
          <div className="flex justify-between items-center pr-5">
            <button onClick={() => navigate("/")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div>
              <button type="button" onClick={handleShareClick}>
                <svg
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    className="cls-1"
                    d="M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-semibold capitalize">
              {shop.name}
              <p className="text-sm tracking-widest text-gray-600 py-1 capitalize">
                {shop.tags}
              </p>
            </h1>
            <p className="flex items-center w-full justify-center gap-x-2 font-bold py-2 text-white">
              <div className={`px-2 py-1 ${cardColor} w-max rounded-md`}>
                {ratingValue} ★
              </div>
              <p className="text-gray-500">{numberOfReviews} ratings</p>
            </p>
            <div className="flex gap-x-2 items-center border-b-2 pb-2 w-2/3 justify-center border-dashed truncate">
              <div className="w-max bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                15-30 mins
              </div>
              <p className="text-gray-600 text-sm flex items-center gap-x-1 truncate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 42 68"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 0C32.598 0 42 9.40202 42 21C42 31.9234 33.6599 40.8989 23 41.906V64C23 65.1046 22.1046 66 21 66C19.8954 66 19 65.1046 19 64V41.906C8.34014 40.8989 0 31.9234 0 21C0 9.40202 9.40202 0 21 0Z"
                    fill="#E23744"
                  />
                  <path
                    d="M28 21C28 17.134 24.866 14 21 14C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28C24.866 28 28 24.866 28 21Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M21 68C23.7614 68 26 66.8807 26 65.5C26 64.1193 23.7614 63 21 63C18.2386 63 16 64.1193 16 65.5C16 66.8807 18.2386 68 21 68Z"
                    fill="#E23744"
                  />
                </svg>
                {shop.description}
              </p>
            </div>
            <div className="text-start text-xs font-bold flex items-center gap-x-1 mt-2 py-2 rounded-lg w-2/3 justify-center bg-cyan-100 text-blue-500 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              <p>
                Free Delivery after min. order value {shop.minDeliveryOrder}
              </p>
            </div>
          </div>
        </div>
        <div className="py-2" ref={searchBarRef}></div>
        <div className="w-full bg-white md:w-1/2 lg:w-1/3 p-2 md:ml-5 flex border  rounded-lg shadow-lg">
          <p className="pl-3 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </p>
          <input
            onClick={() => {
              setFixed(true);
              if (searchBarRef.current) {
                searchBarRef.current.scrollIntoView();
              }
            }}
            type="text"
            className="h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg"
            placeholder={shop.name ? `Search in ${shop.name}` : ""}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => setFixed(false)}
          ></input>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Banner;
