import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../../Core/API/endpoint";
import "./styles.css";
import {
  closeToggle,
  signinToggle,
  signupToggle,
} from "../../../Core/store/slice/toggleSlice";
import { loginRequest, loginUser, logoutUser } from "../../../Core/store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

const LScontainer = () => {
  const today = new Date();
  const futureDate = new Date(today);
  const navigate = useNavigate();
  futureDate.setDate(futureDate.getDate() + 30);
  const formattedDate = futureDate.toUTCString();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const dispatch = useDispatch();
  const click = useSelector((state) => {
    return state.toggle["toggle"];
  });

  const handleLogin = async (e) => {
    dispatch(loginRequest());
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}user/login`, loginData);
      console.log(data);
      dispatch(loginUser());
      dispatch(closeToggle());
      toast.success("Login Successfull", {
        autoClose: 1500,
        hideProgressBar: true,
      })
    } catch (error) {
      alert("login unsuccessfull");
      dispatch(logoutUser());
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const {data} = await axios.post(`${BASE_URL}user/new`, {
      signupData,
    });

    if (data.success) {
      alert("registration Successfull");
      dispatch(signinToggle());
    }
  };

  const googleLoginHandler = () => {
    try {
      window.open(`${BASE_URL}user/googleAuth`, "_self");
      dispatch(loginUser());
    } catch (err) {
      navigate("*");
      dispatch(logoutUser());
    }
  };

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
                onChange={(e) => handleSignupChange(e)}
                value={signupData["name"]}
                type="text"
                placeholder="Name : John Doe"
                className="p-4 text-xl w-full focus:outline-none"
                name="name"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                onChange={(e) => handleSignupChange(e)}
                value={signupData["email"]}
                type="email"
                placeholder="Email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
                name="email"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                onChange={(e) => handleSignupChange(e)}
                value={signupData["password"]}
                type="password"
                name="password"
                placeholder="Password:  *******"
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
              className="w-full p-5 border rounded-lg my-4 bg-rose-500 hover:bg-rose-700 text-xl text-white"
              onClick={(e) => handleRegister(e)}
            >
              Register
            </button>
          </form>
        ) : (
          <form className="p-5">
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                onChange={(e) => handleLoginChange(e)}
                value={loginData["email"]}
                type="email"
                placeholder="email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
                name="email"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input
                onChange={(e) => handleLoginChange(e)}
                value={loginData["password"]}
                type="password"
                name="password"
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
              className="w-full p-5 border rounded-lg my-4 bg-rose-500 hover:bg-rose-700 text-xl text-white"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
            <div className="login_with_google">
              <p className="seprater--text"> Or Login With </p>

              <button
                type="button"
                className="login-with-google-btn"
                onClick={googleLoginHandler}
              >
                Sign in with Google
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer autoClose={1500} hideProgressBar={true}/>
    </div>
  );
};

export default LScontainer;
