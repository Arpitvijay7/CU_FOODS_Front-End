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
      if (data.Otp) {
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
        <div className="flex items-center w-full">
          <label className="h-full pl-[0.15rem] hover:cursor-pointer">
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
            <input
              className="w-[70%] ml-3 border border-gray-300 h-10 rounded p-5 focus:outline-none"
              type="number"
              maxLength={10}
              placeholder="9876543210"
              value={phoneNumber}
              required
              id="checkboxDefault"
            />
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
            className="w-full rounded border bg-green-600/90 disabled:opacity-50 text-white py-1.5 active:opacity-75 mt-2"
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
                  <div className="bg-white w-[60vw] h-full flex justify-center flex-col items-center gap-y-5">
                    <h1 className="font-bold text-sm">
                      Please enter the OTP sent to your Phone Number
                    </h1>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span className="mx-2">-</span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="text-black border-b-2 border-black"
                        />
                      )}
                      className="border"
                    />
                    <button
                      onClick={() => verifyOtp()}
                      type="button"
                      disabled={loading === 2}
                      className="w-full rounded border bg-green-600/90 disabled:opacity-50 text-white py-1.5 active:opacity-75 mt-2"
                    >
                      Verify OTP
                    </button>
                  </div>
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
