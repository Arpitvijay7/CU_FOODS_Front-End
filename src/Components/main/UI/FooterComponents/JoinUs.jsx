// HiringPage.js
import React, { useEffect, useState } from "react";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Join Us";
  }, []);

  const [formData, setFormData] = useState({
    jobTitle: "",
    resume: null,
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, e.g., send data to your backend

  };

  return (
    <div className=" min-h-screen w-full ">
      <div className="  p-8 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-4">Join Us</h1>
        <p className="mb-4">
          Welcome to our hiring platform! We're excited to have you join our
          team. To apply for a position, please fill out the form below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full flex flex-col items-center"
        >
          <div className="mb-4  md:w-[600px] w-full">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="mt-1 md:w-[600px] w-full p-2 border border-[grey] rounded-md"
              placeholder="Software Engineer, Marketing Manager, etc."
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 md:w-[600px] w-full">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume (PDF or Word)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="mt-1 md:w-[600px] p-2 w-full border border-[grey] rounded-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 md:w-[600px] w-full">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 p-2 md:w-[600px] w-full border border-[grey] rounded-md"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 md:w-[600px] w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 md:w-[600px] w-full border border-[grey] rounded-md"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 md:w-[600px] w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 md:w-[600px] w-full border border-[grey] rounded-md"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 md:w-[600px] w-full">
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              className="mt-1 p-2 md:w-[600px] w-full border border-[grey] rounded-md h-32"
              placeholder="Tell us about yourself and why you're interested in this position."
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <p>
            Note: You can also contect us at{" "}
            <a href="mailto:hr@cufood.com" className="text-[blue]">
              hr@cufood.com
            </a>
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-[1rem] rounded-md"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
