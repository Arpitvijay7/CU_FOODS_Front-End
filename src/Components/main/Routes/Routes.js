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
import VendorHelpPage from "../UI/FooterComponents/VendorHelpPage";
import JoinUs from "../UI/FooterComponents/JoinUs";
import VendorJoinUsPage from "../UI/FooterComponents/VendorJoinUs";
import HearfromOurInterns from "../UI/FooterComponents/HearfromOurInterns";
import VerifyEmail from "../UI/Screens/VerifyEmail/VerifyEmail";
import MobileSearch from "../UI/Screens/MobileSearch";
axios.defaults.withCredentials = true;

const Routings = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isResetPwd = location.pathname === "/resetpassword";
  const verifyEmail = location.pathname === "/verifyEmail";
  const isRestaurant = location.pathname.includes("restaurant");

  const dispatch = useDispatch();

  const { auth, loading } = useSelector((state) => state.users);
  const getLogedInuser = async () => {
    dispatch(loginRequest());
    try {
      const { data } = await axios.get(`${BASE_URL}user/logedInUser`);

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
      {!isResetPwd && !verifyEmail && <Navbar />}
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
        <Route path="/mobileSearch" element={<MobileSearch />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPwd />} />
        <Route path="/forgotpassword" element={<ForgotPwd />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndCodition" element={<TermsAndConditions />} />
        <Route path="/RefundsAndReturns" element={<RefundsAndReturns />} />
        <Route path="/VendorHelp" element={<VendorHelpPage />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/vendorJoinUs" element={<VendorJoinUsPage />} />
        <Route path="/hearFromOurInterns" element={<HearfromOurInterns />} />

        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!isResetPwd && !isRestaurant && <Footer />}
    </>
  );
};
export default Routings;
