import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-screen h-96 bg-rose-400 relative">
        <div className="flex absolute bottom-0 w-screen px-5 pb-5">
          <div className="w-3/4">
            <h1 className="text-2xl md:text-5xl font-bold">Punjabi Rasoi</h1>
            <p className="text-xl font-semibold">NC1 front (fast food)</p>
            <p className="font-bold md:text-xl">Chandigarh University</p>
          </div>

          <div className="w-1/3 md:w-40 md:ml-auto h-max text-center border bg-red-400 text-white text-xl font-bold">
            <div className="border-b">5.0 &#9733;</div>
            <div>2.3k reviews</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
