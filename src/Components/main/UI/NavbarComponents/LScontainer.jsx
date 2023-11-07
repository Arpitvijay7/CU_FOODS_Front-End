import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../../Core/API/endpoint";
import "./styles.css";
import {
  closeToggle,
  signinToggle,
  signupToggle,
  forgetPasswordToggle,
} from "../../../Core/store/slice/toggleSlice";
import {
  loginRequest,
  loginUser,
  logoutUser,
} from "../../../Core/store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ButtonLoader from "../../../../Assets/ButtonLoader/ButtonLoader";
import ReCAPTCHA from "react-google-recaptcha";
axios.defaults.withCredentials = true;
const LScontainer = () => {
  const today = new Date();
  const futureDate = new Date(today);
  const navigate = useNavigate();
  futureDate.setDate(futureDate.getDate() + 30);
  const formattedDate = futureDate.toUTCString();
  const [termsAndConditionCheckbox, setTermsAndConditionCheckbox] =
    useState(true);
  const [RegisterVerification, setRegisterVerification] = useState(false);
  const [ForgetPasswordToggle, setForgetPasswordToggle] = useState(false);
  const [forgetPasswordEmail, setforgetPasswordEmail] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [forgetPasswordEmailError, setforgetPasswordEmailError] =
    useState(false);
  const [forgetPasswordEmailErrorMessage, setforgetPasswordEmailErrorMessage] =
    useState("");
  const [load, setLoad] = useState(false);

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
    e.preventDefault();
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
      dispatch(loginUser());
      dispatch(closeToggle());
      toast.success("Login Successfull", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("login unsuccessfull", {
        duration: 1000,
      });
      dispatch(logoutUser());
    }
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const { data } = await axios.post(`${BASE_URL}user/password/forgot`, {
        email: forgetPasswordEmail,
      });
      if (data.success) {
        alert("Password reset link sent to your email");
        setForgetPasswordToggle(true);
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);

      if (err.response) {
        setforgetPasswordEmailError(true);
        setforgetPasswordEmailErrorMessage(err.response.data.message);
      } else {
        setforgetPasswordEmailError(true);
        setforgetPasswordEmailErrorMessage("Something went wrong");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!termsAndConditionCheckbox) {
      toast.error("Accept Terms & Conditions");
      return;
    }
    if (signupData.password.length < 9) {
      toast.error("Password less than 9 Characters");
      return;
    }
    if (!captchaValue) {
      toast.error("Complete Captch First");
      return;
    }

    setLoad(true);
    try {
      const { data } = await axios.post(`${BASE_URL}user/new`, {
        ...signupData,
        captchaValue,
      });

      setRegisterVerification(true);
      setLoad(false);

      // if (data.success) {
      //   alert("registration Successfull");
      //   dispatch(signinToggle());
      //   dispatch(loginUser());
      // }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          duration: 1000,
        });
        setLoad(false);
      } else {
        toast.error("Something went wrong", {
          duration: 1000,
        });
        setLoad(false);
      }
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

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  return (
    <div className="fixed top-0 z-10 grid place-items-center">
      <div
        className="h-screen w-screen bg-opacity-60 backdrop-blur-md bg-black"
        onClick={() => dispatch(closeToggle())}
      ></div>
      <div className="bg-white absolute top-[5%] z-20 w-[calc(100%-2rem)] md:w-1/3 rounded-lg">
        <div className="flex justify-between p-5 text-3xl font-bold">
          <div>
            {click == 1 ? "Login" : click == 2 ? "Register" : "Forgot Password"}
          </div>
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
        {click == 2 ? (
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
            <p className="text-xs w-full text-left -mt-2 pl-1 pb-2 text-red-500">
              Minimum Password Length: 9
            </p>
            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptchaChange} />
            <div className="flex items-center px-2 pb-5 gap-x-2">
              <input
                id="t&c"
                type="checkbox"
                className="cursor-pointer"
                onChange={() =>
                  setTermsAndConditionCheckbox(!termsAndConditionCheckbox)
                }
                checked={termsAndConditionCheckbox}
              ></input>
              <label htmlFor="t&c" className="cursor-pointer">
                Accept Terms and Conditions
              </label>
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
              disabled={RegisterVerification}
            >
              {load ? (
                <ButtonLoader />
              ) : RegisterVerification ? (
                "A verification link has been sent to your email. Please verify your email to continue. Check Spam folders also"
              ) : (
                "Register"
              )}
            </button>
            <div className="login_with_google">
              <p className="seprater--text"> Or sign In With </p>

              <button
                type="button"
                className="login-with-google-btn"
                onClick={googleLoginHandler}
              >
                Sign in with Google
              </button>
            </div>
          </form>
        ) : (
          click !== 3 && (
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
              <button
                className="w-full p-5 border rounded-lg my-4 bg-rose-500 hover:bg-rose-700 text-xl text-white"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
              <div className="flex justify-between">
                <div className="flex space justify-start">
                  <span className="md:block hidden">New to CU Foodz ? </span>
                  <span
                    className="hover:cursor-pointer flex ml-[5px] justify-start underline text-rose-500"
                    onClick={() => dispatch(signupToggle())}
                  >
                    Register
                  </span>
                </div>

                <span
                  className="hover:cursor-pointer underline text-rose-500"
                  onClick={() => dispatch(forgetPasswordToggle())}
                >
                  Forgot Password
                </span>
              </div>

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
          )
        )}

        {click == 3 ? (
          <form className="p-5">
            <div className="w-full p-1 border rounded-lg my-4 ">
              <input
                onChange={(e) => setforgetPasswordEmail(e.target.value)}
                value={forgetPasswordEmail}
                type="email"
                placeholder="Email:  johnDoe@email.com"
                className="p-4 text-xl w-full focus:outline-none"
                name="ForgotEmail"
                required
              ></input>
            </div>
            {forgetPasswordEmailError && (
              <p className="text-red-500 text-base mb-2">
                {forgetPasswordEmailErrorMessage}
              </p>
            )}
            <p>
              Back to Login?{" "}
              <span
                className="hover:cursor-pointer underline text-rose-500"
                onClick={() => dispatch(signinToggle())}
              >
                Login
              </span>
            </p>

            <button
              className="w-full p-5 border rounded-lg my-4 bg-rose-500 outline-8   hover:bg-rose-700 text-xl text-white"
              onClick={(e) => handleForgetPassword(e)}
            >
              {load ? (
                <ButtonLoader />
              ) : ForgetPasswordToggle ? (
                "Mail sended To your email, check you email"
              ) : (
                "Send Mail"
              )}
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default LScontainer;
