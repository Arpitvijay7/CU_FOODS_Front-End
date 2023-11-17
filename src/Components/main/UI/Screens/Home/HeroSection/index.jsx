import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroStyles.css";
import LScontainer from "../../../NavbarComponents/LScontainer";
import { useSelector, useDispatch } from "react-redux";

import { BASE_URL } from "../../../../../Core/API/endpoint";
import {
  closeToggle,
  signinToggle,
  signupToggle,
} from "../../../../../Core/store/slice/toggleSlice";
import {
  loginUser,
  logoutUser,
} from "../../../../../Core/store/slice/userSlice";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import MobileBanner from "./MobileBanner";

const HeroSection = ({ search, setSearch }) => {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => {
    return state.users["auth"];
  });
  const click = useSelector((state) => {
    return state.toggle["toggle"];
  });

  const handleLogout = () => {
    try {
      const { data } = axios.get(`${BASE_URL}user/logout`);
      toast.success("Logout Successfull", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("Logout Unsuccessfull", {
        duration: 1000,
      });
    }
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="hidden lg:block max-w-screen bg-cover h-[60vh] HeroSection relative shadow-2xl">
        <div className="text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl text-white max-w-screen">
          <div className="flex justify-between p-5 lg:p-10">
            <p></p>
            {loggedIn ? (
              <>
                <div className="flex justify-between w-56 md:w-[20vw] text-lg md:text-2xl">
                  <div className="flex space-x-4">
                    <Link to="/checkout">Cart</Link>
                    <Link to="/myorders">MyOrders</Link>
                  </div>

                  <button onClick={() => handleLogout()} className="flex ml-2">
                    Logout{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mt-1 ml-1 rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between w-36 md:w-56">
                  <button onClick={() => dispatch(signinToggle())}>
                    Login
                  </button>
                  <button onClick={() => dispatch(signupToggle())}>
                    Sign Up
                  </button>
                </div>{" "}
              </>
            )}
          </div>
        </div>
        <div className="mt-10 md:mt-5 h-2/3">
          <div className="h-full flex flex-col place-items-center">
            <div className="w-full text-white">
              <div className="text-6xl font-black">CU FOODZ</div>
              <div className="pt-8">
                <p className="font-semibold text-xl md:text-4xl">
                  Discover the best food & drinks in
                  <span className="font-bold"> CU</span>
                </p>
              </div>
            </div>
            <div className="flex place-items-center w-5/6 md:w-2/3 mt-12">
              <div className="grid place-items-center h-full w-full relative">
                <div className="flex place-items-center bg-white mt-10 md:mt-0 w-full md:w-2/3 h-14 rounded-lg md:rounded-lg">
                  <p className="pl-3 pr-2">
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </p>
                  <input
                    type="text"
                    className="hidden md:block h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg"
                    placeholder="Search For Restaurants"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                  <Link
                    to="/mobilesearch"
                    type="text"
                    className="md:hidden h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg flex justify-start items-center text-neutral-400 font-semibold"
                  >
                    Search For Restaurants
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {click != 0 ? <LScontainer /> : <></>}
      <MobileBanner />
      <Toaster />
    </>
  );
};

export default HeroSection;
