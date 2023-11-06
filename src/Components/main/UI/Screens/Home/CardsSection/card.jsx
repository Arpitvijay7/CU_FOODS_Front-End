import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const [cardColor, setCardColor] = useState("");
  const rating = props.rating.avgRating;

  useEffect(() => {
    if (rating > 3.5 && rating <= 4.5) {
      setCardColor("bg-lime-400");
    } else if (rating > 4.5) {
      setCardColor("bg-green-700");
    } else if (rating > 2.5 && rating <= 3.5) {
      setCardColor("bg-yellow-300");
    } else if (rating <= 2.5) {
      setCardColor("bg-red-600");
    }
  }, [rating, props.rating]);

  return (
    <>
      <Link
        to={"/restaurant/" + props.id}
        className="bg-f5f5f5 w-full md:w-1/2 lg:w-1/4 p-2  flex items-center justify-center h-full"
      >
        <div className="bg-white w-[98%] shadow-lg rounded-3xl overflow-hidden">
          <div className="relative">
            <img
              className={`h-48 w-full ${
                props.status === "closed" && "grayscale-[100%]"
              }`}
              loading="lazy"
              src={props.image.path}
            ></img>
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
          <div className="p-4 flex flex-col gap-y-2">
            <div className="grid grid-cols-10">
              <div className="text-start col-span-7">
                <p className="text-xl font-semibold text-black md:truncate">
                  {props.name}
                </p>
                <p className="text-gray-600 text-sm flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 42 68"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                  {props.address}
                </p>
              </div>
              <div
                className={`text-white font-semibold rounded-md text-xs p-2 ml-6 col-span-3 h-max ${cardColor}`}
              >
                {props.rating && props.rating.avgRating
                  ? props.rating.avgRating
                  : "N.A"}{" "}
                ★
              </div>
            </div>
            <div className="border-b border-gray-400 border-dashed text-start text-red-500 text-xs font-bold pb-2 flex items-center gap-x-1">
              {props.roomDelivery ? (
                <>
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
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                  <p>
                    <span>Hostel Room</span> Delivery
                  </p>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M19.9148 18.0003L22 18V13.8571L18.5 10H15V18M19.9148 18.0003C19.7089 17.4175 19.1532 17 18.5 17M19.9148 18.0003C19.97 18.1566 20 18.3248 20 18.5M18.5 17C17.8468 17 17.2911 17.4175 17.0852 18.0003M18.5 17C19.3284 17 20 17.6716 20 18.5M18.5 17C17.6716 17 17 17.6716 17 18.5M17.0852 18.0003L15 18M17.0852 18.0003C17.03 18.1566 17 18.3248 17 18.5M15 18V6H1M15 18L7.91475 18.0003M7.91475 18.0003C7.70891 17.4175 7.15322 17 6.5 17M7.91475 18.0003C7.96996 18.1566 8 18.3248 8 18.5M6.5 17C5.84678 17 5.29109 17.4175 5.08525 18.0003M6.5 17C7.32843 17 8 17.6716 8 18.5M6.5 17C5.67157 17 5 17.6716 5 18.5M5.08525 18.0003L4 18M5.08525 18.0003C5.03004 18.1566 5 18.3248 5 18.5M20 18.5C20 19.3284 19.3284 20 18.5 20C17.6716 20 17 19.3284 17 18.5M8 18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5M4.5 12H3M4.5 15H4M4.5 9H2"
                      stroke="#E23744"
                      stroke-linecap="round"
                    />
                  </svg>

                  <p className="text-red-500 flex flex-wrap gap-x-2">
                    <span>Regular Delivery</span>
                  </p>
                </>
              )}
            </div>
            <div className="text-start text-blue-500 text-xs font-bold flex items-center gap-x-1">
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
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <p>
                Free Delivery after min order value {props.minDeliveryOrder}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
