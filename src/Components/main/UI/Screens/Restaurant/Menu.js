import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard.js";
const Menu = ({ id, data, setSearch, search, load ,shopName }) => {
  return (
    <div className="p-2">
      <div className="w-full  md:w-1/2 lg:w-1/3 p-2 md:mx-12 flex border-2 rounded-lg border-rose-600">
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
          className="h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg"
          placeholder= {`Search in ${shopName}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      {load ? (
        <div className="w-screen h-96 grid place-items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap w-full justify-center md:justify-start">
            <section className="text-gray-600 body-font">
              <div className="px-5 md:pt-10 pt-1 pb-24">
                <div className="flex flex-wrap justify-center">
                  {data &&
                    data.map((val, index) => {
                      return (
                        <>
                          <MenuItemCard
                            key={index}
                            price={val.price}
                            price_half={val.price_half}
                            price_full={val.price_full}
                            name={val.name}
                            imgLink={val.image.path}
                            details={val.description}
                            rating={val.rating}
                            id={val._id}
                            dualOption={val.DualOptions}
                            shop={val.shop}
                          />
                        </>
                      );
                    })}
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
