// VendorHelpPage.js
import React, { useEffect } from "react";

const VendorHelpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Vendor Help";
  }, []);
  return (
    <div className="min-h-screen w-full p-8">
      <div className=" p-8 pt-2 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Need Help As a Vendor?</h1>
        <p className="mb-4">
          If you are a vendor and need assistance with our platform, you've come
          to the right place. We are here to help you with any questions or
          issues you may have.
        </p>
        <h2 className="text-xl font-semibold mb-2">How Can We Assist You?</h2>
        <p className="mb-4">
          Our support team is ready to assist you with various aspects of your
          vendor experience:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Setting up your vendor account.</li>
          <li>Managing your shop listings.</li>
          <li>Handling orders and customer inquiries.</li>
          <li>Payment and financial queries.</li>
          <li>And much more!</li>
        </ul>
        <p className="mb-4">
          If you require assistance, please don't hesitate to contact us using
          the following methods:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Email:{" "}
            <a className="text-[blue]" href="mailto:vendorsupport@cufood.com">vendorsupport@cufood.com</a>
          </li>
          <li>
            Phone: <a href="tel:+917737308877">+91 7737308877</a>
          </li>
          <li>
            Live Chat: Click the chat icon in the bottom right corner of the
            page.
          </li>
        </ul>
        <p>
          Our dedicated support team will respond to your inquiries as soon as
          possible and provide you with the assistance you need.
        </p>
      </div>
    </div>
  );
};

export default VendorHelpPage;
