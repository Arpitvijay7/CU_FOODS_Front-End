import React from "react";
import "./HeroStyles.css";
const HeroSection = () => {
  return (
    <>
      <div className="max-w-screen bg-cover h-[60vh] HeroSection relative">
        <div className="text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl text-white max-w-screen">
          <div className="flex justify-between p-5 lg:p-10">
            <div>CU FOODS</div>
            <div className="flex justify-between w-36 md:w-56">
              <div>Login</div>
              <div>Sign Up</div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-5 h-2/3">
          <div className="h-full flex flex-col place-items-center">
            <div className="w-full text-white">
              <div className="text-6xl font-bold">CU FOODS</div>
              <div className="pt-8">
                <p className="font-semibold text-xl md:text-4xl">
                  Discover the best food & drinks in{" "}
                  <span className="font-bold">CU</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row place-items-center w-3/4 md:w-2/3 mt-12">
              <div className="bg-white mt-10 md:mt-0 w-full md:w-1/3 h-14 rounded-lg md:rounded-none md:rounded-l-lg"></div>
              <div className="hidden md:block bg-white h-full">
                <p className="border h-10 my-2"></p>
              </div>
              <div className="flex place-items-center bg-white mt-10 md:mt-0 w-full md:w-2/3 h-14 rounded-lg md:rounded-none md:rounded-r-lg">
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
                  className="h-full w-[95%] focus:outline-none text-2xl"
                  placeholder="Search For Restaurants"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
