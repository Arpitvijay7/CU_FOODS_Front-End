// VendorJoinUsPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VendorJoinUsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join Us | Vendor";
  }, []);
  return (
    <div className="bg-white min-h-screen p-8 pt-2">
      <button onClick={() => navigate(-1)} className="md:hidden">
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
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Join Us as a Vendor</h1>
        <p className="mb-4">
          Thank you for your interest in becoming a vendor on our platform. We
          would love to hear from you. Please feel free to contact us via email
          to discuss onboarding of your shop on cufoodz.com .
        </p>
        <p className="mb-4">
          <strong>Contact Email:</strong>{" "}
          <a className="text-[blue]" href="mailto:onboarding@cufoodz.com">
            onboarding@cufoodz.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default VendorJoinUsPage;
