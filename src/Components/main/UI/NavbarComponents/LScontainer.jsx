import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeToggle,
  signinToggle,
  signupToggle,
} from "../../../Core/store/slice/toggleSlice";
import { loginUser } from "../../../Core/store/slice/userSlice";
const LScontainer = () => {
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  })
  const [signupData,setSignupData]=useState({
    email:"",
    password:"",
    name:""
  })
  const handleLoginChange=(e)=>{
    const {name,value}=e.target
    setLoginData({...loginData,[name]:value})
  }
  const handleSignupChange=(e)=>{
    const {name,value}=e.target
    setSignupData({...signupData,[name]:value})
  }
  const dispatch = useDispatch();
  const click = useSelector((state) => {
    return state.toggle["toggle"];
  });
  const handleLogin = async(e) => {
    e.preventDefault()
    const res=await fetch("http://localhost:4000/api/vi/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  const data=await res.json()
  if(data.success){
    alert("Login Successfull")
    dispatch(loginUser())
    dispatch(closeToggle())
  }

  };
  const handleRegister =async (e) => {
    e.preventDefault()
    const res=await fetch("http://localhost:4000/api/vi/user/new", {
      method: "POST",
      body: JSON.stringify(signupData),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  const data=await res.json()
  if(data.success){
    alert("registration Successfull")
    dispatch(signinToggle())
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
              <input onChange={(e)=>handleSignupChange(e)}
              value={signupData["name"]}
                type="text"
                placeholder="Name : John Doe"
                className="p-4 text-xl w-full focus:outline-none"
                name="name"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input onChange={(e)=>handleSignupChange(e)}
              value={signupData["email"]}
                type="email"
                placeholder="Email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
                name="email"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input onChange={(e)=>handleSignupChange(e)}
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
              <input onChange={(e)=>handleLoginChange(e)}
                value={loginData["email"]}
                type="email"
                placeholder="email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
                name="email"
              ></input>
            </div>
            <div className="w-full p-1 border rounded-lg my-4">
              <input onChange={(e)=>handleLoginChange(e)}
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
          </form>
        )}
      </div>
    </div>
  );
};

export default LScontainer;
