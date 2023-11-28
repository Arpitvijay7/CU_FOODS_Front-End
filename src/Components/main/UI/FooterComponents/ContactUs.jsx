// src/components/ContactUs.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us";
  }, []);

  return (
    <div className="p-4">
      <button onClick={()=> navigate(-1)} className="md:hidden">
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

      <h1 className="text-3xl text-center md:text-left font-semibold mb-4">Contact Us</h1>
      <p>Last updated on Aug 27th 2023</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>Merchant Legal entity name: Arpit Vijay</p>
        <p>
          Registered Address: Chandigarh University Kharar, Punjab, 140301
          Mohali PUNJAB 140301
        </p>
        <p>
          Operational Address: Chandigarh University Kharar, Punjab, 140301
          Mohali PUNJAB 140301
        </p>
        <br />
        <p>
          <span className="font-bold">Telephone No:</span> 7737308877
        </p>
        <br />

        <p>
          E-Mail ID:{" "}
          <a href="mailto:support@cufoodz.com" className="text-[blue] inline">
            support@cufoodz.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
