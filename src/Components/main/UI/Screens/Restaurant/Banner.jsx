import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../Core/API/endpoint";
import numeral from "numeral";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Banner = ({ id }) => {
  const [shop, setShop] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    if (!shop) return;
    document.title = shop.name;
  }, [shop]);

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
      : numeral(numberOfReviews).format("0.0a");
  return (
    <>
      <div className="w-screen flex flex-col">
        <div className="shadow-lg h-[40vh]">
          <img
            class="object-cover object-center w-full h-full block"
            src={shop.image}
            alt="restaurant image"
          />
        </div>
        <div className="">
          <div class="p-4 shadow-lg rounded-lg md:mt-0 md:rounded-none w-full bg-[white] flex justify-between">
            <div className="md:w-[30vw] md:pt-3">
              <h2 class="text-gray-900 title-font text-2xl font-bold pb-2">
                {shop.name}
              </h2>
              <h3 class="text-gray-800 md:text-lg tracking-widest title-font mb-1 font-semibold">
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

              <p class="text-[16px] text-slate-600 text-bold">
                {formatedNoOfReviews ? formatedNoOfReviews : 0} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
