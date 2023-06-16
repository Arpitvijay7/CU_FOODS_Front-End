import React,{useEffect, useState} from "react";
import {BASE_URL} from "../../../../Core/API/endpoint"
const Banner = ({id}) => {
  const [shop,setShop]=useState("");
  const fetchShop=async ()=>{
    const res=await fetch({BASE_URL}+"shop/getShopDetail/"+id)
    const data=await res.json()
    if(data.success){
      setShop(data.shop)
    }
  }
  useEffect(() => {
    fetchShop()
  }, [])
  
  return (
    <>
      <div className="w-screen flex flex-col">
        <div className="shadow-lg h-[40vh]">
          <img
            class="object-cover object-center w-full h-full block"
            src={shop.image}
            alt="restaurant image"
          />
        </div>
        <div className="p-3 pt-5">
          <div class="p-5 shadow-lg rounded-lg md:mt-0 md:rounded-none w-full bg-green-100 flex justify-between">
            <div className="md:w-[30vw] md:pt-3">
              <h2 class="text-gray-900 title-font text-2xl font-bold pb-2">
                {shop.name}
              </h2>
              <h3 class="text-gray-800 md:text-lg tracking-widest title-font mb-1 font-semibold">
                {shop.description}
              </h3>
            </div>
            <div className="w-1/3 md:w-max md:ml-5 h-max text-center border border-green-600 rounded-md text-green-600 text-sm md:text-lg font-bold md:p-5">
              <div className="border-b border-b-green-600">5.0 &#9733;</div>
              <div>2.3k reviews</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5"></hr>
    </>
  );
};

export default Banner;
