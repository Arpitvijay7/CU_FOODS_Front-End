// VendorJoinUsPage.js
import React, { useEffect } from "react";

const VendorJoinUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join Us | Vendor";
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
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
