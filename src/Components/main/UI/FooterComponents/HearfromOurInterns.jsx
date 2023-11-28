import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HearFromOurInterns = () => {
  // Toggle between 'crimson' and 'white' themes
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hear From Our Interns";
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)} className="md:hidden pl-5 pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="w-8 h-8 -ml-3 active:bg-slate-300 transition rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className={`min-h-screen flex items-center justify-center bg-white`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold  mb-4`}>Coming Soon!</h1>
          <p className={`text-lg mb-8`}>This Page is in under construction.</p>
        </div>
      </div>
    </>
  );
};

export default HearFromOurInterns;
