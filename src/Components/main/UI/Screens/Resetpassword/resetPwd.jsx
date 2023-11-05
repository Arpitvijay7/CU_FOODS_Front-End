import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation , useNavigate} from "react-router-dom";
import { BASE_URL } from "../../../../Core/API/endpoint";
import "./styles.css";
import ButtonLoader from "../../../../../Assets/ButtonLoader/ButtonLoader";
import SmallLoader from "./SmallLoader";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../Core/store/slice/userSlice";
import logo from "../../../../../Assets/Logo/CU_FOODS_WHITE_TRANSPARENT.png";

const ResetPwd = () => {
  const [newPwd, setNewPwd] = useState();
  const [confirmPwd, setconfirmPwd] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const [err, setErr] = useState("");
  const [load, setLoad] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      setErr("Password not matched with confirm password");
      return;
    }

    if (newPwd.length < 8) {
      setErr("Password must be atleast 8 characters long");
      return;
    }

    setLoad(1);
    try {
      await axios.put(`${BASE_URL}user/password/reset/${token}` ,{
        password: newPwd,
        confirmPassword : confirmPwd
      });
      setLoad(0);
      toast.success("Password Reset Successfully", {
        duration: 1000,
      });
      setTimeout(() => {
        dispatch(loginUser());
        navigate("/");
      }, 1000);
    } catch (err) {
      setLoad(0);
      if (err.response) {
        setErr(err.response.data.message);
      } else {
        setErr("Something went wrong");
      }
    }
  };

  return (
    <div className="mainDiv">
      <div className="cardStyle">
        <form action="" name="signupForm" id="signupForm">
          <img src={logo} className="w-[150px]" id="signupLogo" loading="lazy"/>

          <h2 className="formTitle">Login to your account</h2>

          <div className="inputDiv">
            <label className="inputLabel" for="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              required
            ></input>
          </div>

          <div className="inputDiv">
            <label className="inputLabel" for="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPwd}
              onChange={(e) => setconfirmPwd(e.target.value)}
            ></input>
          </div>

          {err && <p className="ResetPWdErr">{err}</p>}

          <div className="buttonWrapper">
            <button
              type="submit"
              id="submitButton"
              onClick={SubmitHandler}
              className="submitButton pure-button pure-button-primary"
            >
              <span>{load ? <SmallLoader/> :'Continue'}</span>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ResetPwd;
