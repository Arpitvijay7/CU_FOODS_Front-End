import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../Core/API/endpoint";
import Card from "./card";
import { motion } from "framer-motion";
const CardsSection = ({ data, setData, load }) => {
  return (
    <>
      {!load ? (
        <div className="w-screen flex pt-10 pb-20 px-2 flex-wrap justify-evenly">
          <div
            className="hidden my-10 md:inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          {[1, 2, 3].map((i) => (
            <motion.div
              initial={{
                y: 75,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              key={i}
              className="md:hidden animate-pulse h-[30vh] md:h-[25vh] my-2 md:my-2 rounded-3xl w-full md:w-1/2 lg:w-1/3 xl:w-[23vw] bg-neutral-300"
            />
          ))}
        </div>
      ) : (
        <>
          <div className="w-full px-3 md:px-[5%]">
            <div className="">
              <section className="text-gray-600 body-font">
                <div className="container pb-8 lg:pb-16">
                  <div className="flex flex-wrap pt-10 -m-4">
                    {data && data.length ? (
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
              <h3 className="text-center font-bold mb-20 md:mb-0">
                More shops will be added soon...
              </h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CardsSection;
