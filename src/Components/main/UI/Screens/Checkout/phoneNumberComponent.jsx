import React, { useState } from "react";
import { useSelector } from "react-redux";

const PhoneNumberComponent = ({ phoneNumber, setPhoneNumber }) => {
  const [editableStatus, setEditableStatus] = useState(false);
  const user = useSelector((state) => state.users);
  const userPhoneNumber = user.details.phoneNumber;
  //   if (userphoneNumber) {
  //     setPhoneNumber(user.details.phoneNumber[0]);
  //     setEditableStatus(false)
  //   }
  const checkPhoneNumber = async () => {};
  return (
    <div className="w-full flex flex-col justify-center items-center mt-7 border  p-5  rounded-md">
      <div className="flex items-center w-full">
        <label className="h-full pl-[0.15rem] hover:cursor-pointer">
          Phone Number :
        </label>
        {editableStatus ? (
          <input
            className="w-[70%] ml-3 border border-gray-300 h-10 rounded p-5"
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
          <p className="w-[70%] ml-3 border border-gray-300 h-10 rounded p-5 focus:outline-none">
            {userPhoneNumber}
          </p>
        )}
      </div>
      {phoneNumber.length < 10 ||
        (userPhoneNumber && (
          <h5 className="text-xs text-right px-7 font-bold pb-5 w-full text-rose-500">
            * minimum 10 digits required
          </h5>
        ))}
      {editableStatus && (
        <button
          onClick={() => checkPhoneNumber()}
          type="button"
          className="w-full rounded border bg-green-400 text-white py-1.5 active:opacity-75"
        >
          Verify
        </button>
      )}

      <p className="text-xs  mt-3 text-rose-500">
        Please ensure the accuracy of your provided phone number, as any errors
        may impact the success of your delivery. We will not be responsible in
        that case.
      </p>
    </div>
  );
};

export default PhoneNumberComponent;
