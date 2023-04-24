import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from '../UI/Screens/Home'
import Login from '../UI/Screens/Login'
import Navbar from "../UI/NavbarComponents/index"
import Footer from '../UI/FooterComponents'
import ErrorPage from '../UI/Screens/Error'
import ForgotPwd from '../UI/Screens/Forgotpassword/forgotPwd'
import ResetPwd from '../UI/Screens/Resetpassword/resetPwd'
const Routings = () => {
  const location=useLocation();
    const isHome = location.pathname === '/';

    return (
      <>
        {!isHome && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/resetpassword' element={<ResetPwd/>}/>
          <Route path='/forgotpassword' element={<ForgotPwd/>}/>




          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </>
    );
  };
export default Routings