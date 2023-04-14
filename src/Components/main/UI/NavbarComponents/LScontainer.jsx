import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeToggle,
  signinToggle,
  signupToggle,
} from "../../../Core/store/slice/toggleSlice";
const LScontainer = () => {
  const dispatch = useDispatch();
  const click = useSelector((state) => {
    return state.toggle["toggle"];
  });
  const handleLogin = () => {};
  const handleRegister = () => {};
  return (
    <div className="fixed top-0 z-10 grid place-items-center">
      <div
        className="h-screen w-screen bg-opacity-60 backdrop-blur-md bg-black"
        onClick={() => dispatch(closeToggle())}
      ></div>
      <div className="bg-white absolute top-[30%] z-20 w-[calc(100%-2rem)] md:w-1/3 rounded-lg">
        <div className="flex justify-between p-5 text-3xl font-bold">
          <div>{click > 1 ? "Register" : "Login"}</div>
          <button onClick={() => dispatch(closeToggle())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {click > 1 ? (
          <form className="p-5">
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                type="email"
                placeholder="email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                type="password"
                placeholder="password:  *******"
                className="p-4 text-xl w-full focus:outline-none"
              ></input>
            </div>
            <p>
              Already have an account?{" "}
              <span
                className="hover:cursor-pointer underline text-rose-500"
                onClick={() => dispatch(signinToggle())}
              >
                Login
              </span>
            </p>
            <button
              className="w-full p-5 border rounded-lg my-4 bg-rose-500 hover:bg-rose-700 text-white"
              onClick={() => handleLogin}
            >
              Register
            </button>
          </form>
        ) : (
          <form className="p-5">
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                type="email"
                placeholder="email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                type="password"
                placeholder="password:  *******"
                className="p-4 text-xl w-full focus:outline-none"
              ></input>
            </div>
            <p>
              New to CU Foods?{" "}
              <span
                className="hover:cursor-pointer underline text-rose-500"
                onClick={() => dispatch(signupToggle())}
              >
                Create account
              </span>
            </p>
            <button
              className="w-full p-5 border rounded-lg my-4 bg-rose-500 hover:bg-rose-700 text-white"
              onClick={() => handleRegister}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LScontainer;
