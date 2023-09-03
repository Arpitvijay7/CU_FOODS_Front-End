import React, { useEffect } from "react";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <h3 className="text-md mb-2">Last updated on Aug 27th 2023</h3>
        <p className="text-gray-700 mb-4">
          This privacy policy sets out how Arpit Vijay uses and protects any
          information that you give Arpit Vijay when you use this website. Arpit
          Vijay is committed to ensuring that your privacy is protected. Should
          we ask you to provide certain information by which you can be
          identified when using this website, and then you can be assured that
          it will only be used in accordance with this privacy statement. Arpit
          Kumar may change this policy from time to time by updating this page.
          You should check this page from time to time to ensure that you are
          happy with any changes.
        </p>
        <p className="text-gray-700 mb-4">
          We may collect the following information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name and job title</li>
          <li>Contact information including email address</li>
          <li>
            Demographic information such as postcode, preferences and interests
          </li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h3 className="text-gray-700 mb-4">
          What we do with the information we gather
        </h3>
        <p className="text-gray-700 mb-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Internal record keeping.</li>
          <li>
            We may use the information to improve our products and services.
          </li>
          <li>
            We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail.
          </li>
          <li>
            We may use the information to customize the website according to
            your interests.
          </li>
        </ul>

        <h3 className="text-gray-700 mb-4">Security</h3>
        <p className="text-gray-700 mb-4">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </p>

        <h3 className="text-gray-700 mb-4">How we use cookies</h3>
        <p className="text-gray-700 mb-4">
          A cookie is a small file that asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added and the
          cookie helps analyze web traffic or lets you know when you visit a
          particular site.
        </p>
        <p className="text-gray-700 mb-4">
          Cookies allow web applications to respond to you as an individual. The
          web application can tailor its operations to your needs, likes, and
          dislikes by gathering and remembering information about your
          preferences.
        </p>
        <p className="text-gray-700 mb-4">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyze data about web page traffic and improve our
          website in order to tailor it to customer needs.
        </p>
        <p className="text-gray-700 mb-4">
          We only use this information for statistical analysis purposes and
          then the data is removed from the system.
        </p>
        <p className="text-gray-700 mb-4">
          Overall, cookies help us provide you with a better website, by
          enabling us to monitor which pages you find useful and which you do
          not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with
          us.
        </p>
        <p className="text-gray-700 mb-4">
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer.
        </p>
        <p className="text-gray-700 mb-4">
          This may prevent you from taking full advantage of the website.
        </p>

        <h3 className="text-gray-700 mb-4">Links to other websites</h3>
        <p className="text-gray-700 mb-4">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website.
        </p>
        <p className="text-gray-700 mb-4">
          Therefore, we cannot be responsible for the protection and privacy of
          any information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement.
        </p>
        <p className="text-gray-700 mb-4">
          You should exercise caution and look at the privacy statement
          applicable to the website in question.
        </p>

        <h3 className="text-gray-700 mb-4">
          Controlling your personal information
        </h3>
        <p className="text-gray-700 mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Whenever you are asked to fill in a form on the website, look for
            the box that you can click to indicate that you do not want the
            information to be used by anybody for direct marketing purposes.
          </li>
          <li>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or emailing us at{" "}
            <a href="mailto:support@cufood.com" className="text-[blue]">support@cufood.com</a>.
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          We will not sell, distribute, or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so.
        </p>
        <p className="text-gray-700 mb-4">
          We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="text-gray-700 mb-4">
          You may request details of personal information which we hold about
          you under the Data Protection Act 1998. A small fee will be payable.
        </p>
        <p className="text-gray-700 mb-4">
          If you would like a copy of the information held on you, please write
          to <a href="mailto:support@cufood.com" className="text-[blue]">support@cufood.com</a>.
        </p>
        <p className="text-gray-700">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please write to or email us as soon as possible, at the
          above address.
        </p>
        <p className="text-gray-700 mb-4">
          We will promptly correct any information found to be incorrect.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
