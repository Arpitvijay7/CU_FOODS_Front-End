import React, { useEffect } from 'react';

const TermsAndConditions = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms And Conditions";

  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <h3 className="text-sm mb-4">Last updated on Aug 27th, 2023</h3>

        <p className="text-gray-700 mb-4">
          The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
        </p>

        <p className="text-gray-700 mb-4">
          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Arpit Vijay's relationship with you in relation to this website.
        </p>

        <p className="text-gray-700">
          The term 'Arpit Vijay' or 'us' or 'we' refers to the owner of the website whose registered/operational office is Chandigarh University Kharar, Punjab, 140301 Mohali PUNJAB 140301. The term 'you' refers to the user or viewer of our website.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Terms of Use</h2>

        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
          <li>This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
          <li>All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
          <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
          <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
          <li>You may not create a link to this website from another website or document without Arpit Vijay's prior written consent.</li>
          <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Liability Disclaimer</h2>

        <p className="text-gray-700">
          We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
