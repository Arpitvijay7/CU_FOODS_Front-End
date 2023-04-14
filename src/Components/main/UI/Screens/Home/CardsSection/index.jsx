import React, { useEffect, useState } from "react";
import Card from "./card";
const CardsSection = () => {
  const [data,setData]=useState()
  useEffect(() => {
    const fetchData=async ()=>{
    const res=await fetch("http://localhost:4000/api/vi/shop/getAllShops")
    const dat1=await res.json()
    setData(dat1.shops)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="w-full -mt-14 px-[12%] md:px-[5%]">
        <div className="">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">

                {data && data.map((val,id)=>{
                  return(
                    <Card key={id} image={val.image} name={val.name} address={val.description} />
                  )
                })}

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardsSection;
