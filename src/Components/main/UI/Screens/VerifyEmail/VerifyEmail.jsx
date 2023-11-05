import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../Core/API/endpoint";
import { loginUser } from "../../../../Core/store/slice/userSlice";
import Home from "../Home";
import toast, { Toaster } from "react-hot-toast";

const VerifyEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const [isVarified, setIsVarified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      try {
        await axios.put(`${BASE_URL}user/verify/${token}`);
        if (isMounted) {
          dispatch(loginUser());
          navigate("/?verify=true");
        }
      } catch (err) {
        console.log("Error:", err);
        if (isMounted) {
          if (err.response) {
            navigate(`/?verifyError=${err.response.data.message}`);
          } else {
            navigate(`/?verifyError=Something went wrong`);
          }
        }
      }
    };

    verifyUser();

    return () => {
      // Cleanup function to handle unmounting
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Home />
      <Toaster />
    </>
  );
};

export default VerifyEmail;
