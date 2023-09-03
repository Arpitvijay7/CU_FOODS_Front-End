// src/components/ContactUs.js

import React, { useEffect } from "react";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
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
        <p><span className="font-bold">Telephone No:</span>  7737308877</p>
        <br />
        
        <p>
          E-Mail ID:{" "}
          <a href="mailto:support@cufood.com" className="text-[blue] inline">
            support@cufood.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
