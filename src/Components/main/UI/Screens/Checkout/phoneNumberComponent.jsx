import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../../Core/API/endpoint";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
const PhoneNumberComponent = ({ phoneNumber, setPhoneNumber }) => {
  const [editableStatus, setEditableStatus] = useState(true);
  const user = useSelector((state) => state.users);
  const { isPhoneVerified } = user.details;
  const userPhoneNumber = user.details.phoneNo;
  const [loading, setLoading] = useState(0);
  const [otp, setOtp] = useState();
  const [showOtpModal, setShowOtpModal] = useState(false);
  console.log(user);
  useEffect(() => {
    if (isPhoneVerified) {
      setPhoneNumber(userPhoneNumber);
      setEditableStatus(false);
    } else {
      setPhoneNumber("");
    }
  }, []);
  const verifyPhoneNumber = async () => {
    if (!phoneNumber) {
      toast.error("Enter Phone Number First");
      return;
    }
    if (phoneNumber.length < 10) {
      toast.error("Phone number less than 10 numbers");
      return;
    }
    try {
      setLoading(1);
      const { data } = await axios.post(`${BASE_URL}user/phoneAuth`, {
        phoneNumber,
      });
      console.log(data);
      if (data.response.return) {
        toast.success("OTP sent successfully");
        setShowOtpModal(true);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(0);
    }
  };
  const verifyOtp = async () => {
    if (!otp) {
      toast.error("Enter OTP First");
      return;
    }
    if (otp.length !== 6) {
      toast.error("OTP less than 6 numbers");
      return;
    }
    try {
      setLoading(2);
      const { data } = await axios.post(`${BASE_URL}user/OtpVerify`, {
        otp,
        phoneNumber,
      });
      console.log(data);
      if (data.success) {
        toast.success("OTP verified successfully");
        setShowOtpModal(false);
        setEditableStatus(false);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(0);
    }
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-7 border  p-5  rounded-md">
        <div className="flex items-start w-full">
          <label className="h-full flex-1 md:flex-none hover:cursor-pointer text-md">
            Phone Number :
          </label>
          {editableStatus ? (
            <input
              className="w-[70%] ml-3 border border-gray-300 h-10 rounded p-5 "
              type="number"
              maxLength={10}
              placeholder="9876543210"
              value={phoneNumber}
              required
              onChange={(e) => {
                const inputValue = e.target.value;
                if (inputValue.length <= 10) {
                  setPhoneNumber(inputValue);
                }
              }}
              id="checkboxDefault"
            />
          ) : (
            <>
              <div className="flex flex-col w-[60%] md:w-[70%]">
                <input
                  className="ml-3 border border-gray-300 h-10 rounded p-5 focus:outline-none"
                  type="number"
                  maxLength={10}
                  placeholder="9876543210"
                  value={phoneNumber}
                  required
                  id="checkboxDefault"
                />
                <p className="ml-5 flex gap-x-1 mt-1 font-bold text-sm items-center">
                  Verified
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <button className="p-2" onClick={() => setEditableStatus(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </button>
            </>
          )}
        </div>
        {phoneNumber.length < 10 && (
          <h5 className="text-xs text-right px-7 font-bold pb-5 w-full text-rose-500">
            * minimum 10 digits required
          </h5>
        )}
        {editableStatus && (
          <button
            onClick={() => verifyPhoneNumber()}
            type="button"
            disabled={loading === 1}

            className="w-full rounded border bg-[crimson]/90 disabled:opacity-50 text-white py-1.5 active:opacity-75 mt-2"
          >
            Send OTP
          </button>
        )}

        <p className="text-xs  mt-3 text-rose-500">
          Please ensure the accuracy of your provided phone number, as any
          errors may impact the success of your delivery. We will not be
          responsible in that case.
        </p>
      </div>
      {showOtpModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={() => setShowOtpModal(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <form className="bg-white w-[60vw] h-full flex justify-center flex-col items-center gap-y-5">
                    <h1 className="font-bold text-sm">
                      Please enter the OTP sent to your Phone Number
                    </h1>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span className="p-1"></span>}
                      renderInput={(props) => (
                        <div className="border border-gray-600 rounded-lg p-2">
                          <input
                          type="number"
                            {...props}
                            className="text-black  focus:outline-none"
                          />
                        </div>
                      )}
                      className="border"
                    />
                    <button
                      onClick={() => verifyOtp()}
                      type="submit"
                      disabled={loading === 2}
                      className="w-full rounded border bg-rose-600/90 disabled:opacity-50 text-white py-1.5 active:opacity-75 mt-2"
                    >
                      Verify OTP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneNumberComponent;
