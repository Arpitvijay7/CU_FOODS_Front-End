import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";
const Menu = ({ id, data, load, shopName }) => {
  return (
    <div className="p-2 pt-10">
      {load ? (
        <div className="w-screen h-96 grid place-items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (
        <>
          <div className="">
            <section className="text-gray-600 body-font">
              <div className="md:pt-10 pt-1 pb-24">
                {/* <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-2">
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
                            available={val.stockAvailability}
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
