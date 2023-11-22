import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../Core/API/endpoint";
import Card from "./card";
const CardsSection = ({ data, setData, load }) => {
  return (
    <>
      {load ? (
        <div className="w-screen h-96 grid place-items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (
        <>
          <div className="w-full px-3 md:px-[5%]">
            <div className="">
              <section className="text-gray-600 body-font">
                <div className="container pb-16">
                  <div className="flex flex-wrap pt-10 -m-4">
                    {data.length ? (
                      data.map((val, id) => {
                        return (
                          <Card
                            key={id}
                            id={val._id}
                            image={val.image}
                            name={val.name}
                            address={val.description}
                            rating={val.rating}
                            status={val.status}
                            roomDelivery={val.roomDelivery}
                            deliveryLocation={val.DeliveryLocation}
                            minDeliveryOrder={val.minDeliveryOrder}
                          />
                        );
                      })
                    ) : (
                      <div className="w-full">
                        <p className="text-center"> No Shops found </p>
                      </div>
                    )}
                  </div>
                </div>
              </section>
              <h3 className="text-center ">More shops will be added soon.</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CardsSection;
