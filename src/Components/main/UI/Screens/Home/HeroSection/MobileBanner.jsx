import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinToggle } from "../../../../../Core/store/slice/toggleSlice";
import { Link } from "react-router-dom";
import heroImage from "../../../../../../Assets/Homepage/PC_Banner.jpg";
import ExploreSection from "./ExploreSection";
import MobileUserDrawerUsingMiui from "./MiuiDrawer";
import { Divider } from "@mui/material";
const MobileBanner = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userAuthenticated = user.auth;
  return (
    <>
      <div className="lg:hidden px-3 flex flex-col gap-y-5">
        <nav className="flex justify-between pt-5 items-center">
          <div className="text-start">
            <h1 className="text-4xl font-bold" >CuFoodz</h1>
            <p className="font-semibold text-xs">Delicious. Delivered. Easy.</p>
          </div>
          {!userAuthenticated && (
            <button
              onClick={() => dispatch(signinToggle())}
              className="h-max p-2 px-4 border font-bold rounded-md border-rose-600  bg-rose-600 text-white hover:border-rose-600"
            >
              Login
            </button>
          )}
          {userAuthenticated ? <MobileUserDrawerUsingMiui /> : <></>}
        </nav>
        <Link
          to="/mobilesearch"
          type="text"
          className="border p-2 px-3 h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg flex gap-x-2 justify-start items-center text-neutral-500"
          style={{ boxShadow: "0px 0px 10px #e5e7eb" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="red"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <p>Search for restaurants</p>
        </Link>
        <div className="mt-2">
          <img className="rounded-3xl w-full" src={heroImage} />
        </div>
      </div>
      <ExploreSection />
      <div className="lg:hidden">
        <Divider className="pt-5 text-center px-5 font-bold text-xl">
          All Restaurants
        </Divider>
      </div>
    </>
  );
};

export default MobileBanner;
