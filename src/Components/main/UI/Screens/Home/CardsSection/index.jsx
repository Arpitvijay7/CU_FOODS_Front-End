import React, { useEffect, useState } from "react";
import Card from "./card";
const CardsSection = () => {
  const [data,setData]=useState()
  const [load,setLoad]=useState(1)
  const fetchData=async ()=>{
    const res=await fetch("http://localhost:4000/api/vi/shop/getAllShops")
    const dat1=await res.json()
    setData(dat1.shops)
    
    setLoad(0)
    }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {load? (
        <div className="w-screen h-96 grid place-items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div classNameName="w-full -mt-14 px-[12%] md:px-[5%]">
            <div classNameName="">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    {data &&
                      data.map((val, id) => {
                        return (
                          <Card
                            key={id}
                            image={val.image}
                            name={val.name}
                            address={val.description}
                          />
                        );
                      })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardsSection;
