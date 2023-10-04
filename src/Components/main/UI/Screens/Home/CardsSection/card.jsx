import React from "react";
import { Link } from "react-router-dom";
import pic from "../../../../../../Assets/Homepage/img.png";
const Card = (props) => {
  return (
    <>
      <Link
        to={"/restaurant/" + props.id}
        className="bg-f5f5f5 w-full md:w-1/2 lg:w-1/4 p-2  flex items-center justify-center"
      >
        <div className="bg-white w-[98%] shadow-lg rounded-3xl overflow-hidden">
          <div className="relative">
            <img className=" h-48 w-full" loading="lazy" src={pic}></img>
            <div className="absolute bottom-4 right-4 bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              15-30 mins
            </div>
            {props.status === "closed" && (
              <div className="absolute bottom-[-1px] left-5 text-red-500 bg-white px-4 py-1 rounded-t-lg text-xs font-black w-max">
                CLOSED
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="text-start">
                <p className="text-xl font-semibold text-black">{props.name}</p>
                <p className="text-gray-600 text-sm">{props.address}</p>
              </div>
              <div className="bg-green-700 text-white font-semibold rounded-md text-xs p-2 ml-6">
                {props.rating && props.rating.avgRating
                  ? props.rating.avgRating
                  : "N.A"}{" "}
                ★
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
