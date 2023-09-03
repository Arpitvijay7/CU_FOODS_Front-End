import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../UI/Screens/Home";
import Login from "../UI/Screens/Login";
import Navbar from "../UI/NavbarComponents/index";
import Footer from "../UI/FooterComponents";
import ErrorPage from "../UI/Screens/Error";
import ForgotPwd from "../UI/Screens/Forgotpassword/forgotPwd";
import ResetPwd from "../UI/Screens/Resetpassword/resetPwd";
import Checkout from "../UI/Screens/Checkout";
import Restaurant from "../UI/Screens/Restaurant";
import MyOrders from "../UI/Screens/MyOrders";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  loginUser,
  logoutUser,
} from "../../Core/store/slice/userSlice";
import { BASE_URL } from "../../Core/API/endpoint";
import axios from "axios";
import ProtectedRoutes from "./ProjectedRoutes";
import PrivacyPolicy from "../UI/FooterComponents/PrivacyPolicy";
import TermsAndConditions from "../UI/FooterComponents/Terms&Conditions";
import RefundsAndReturns from "../UI/FooterComponents/RefundsAndReturns";
import ContactUs from "../UI/FooterComponents/ContactUs";
axios.defaults.withCredentials = true;

const Routings = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dispatch = useDispatch();

  const { auth, loading } = useSelector((state) => state.users);
  const getLogedInuser = async () => {
    dispatch(loginRequest());
    try {
      const { data } = await axios.get(`${BASE_URL}user/logedInUser`);
      console.log(data);
      if (data.success) {
        dispatch(loginUser());
      }
    } catch (error) {
      dispatch(logoutUser());
    }
  };

  useEffect(() => {
    getLogedInuser();
  }, []);

  return (
    <>
      {!isHome && <Navbar />}
      <Routes>
        <Route
          element={<ProtectedRoutes isAuthenticated={auth} loading={loading} />}
        >
          <Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Route>
        </Route>
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPwd />} />
        <Route path="/forgotpassword" element={<ForgotPwd />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndCodition" element={<TermsAndConditions />} />
        <Route path="/RefundsAndReturns" element={<RefundsAndReturns />} />
        <Route path="/contactUs" element={<ContactUs />} />


        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </>
  );
};
export default Routings;
