import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from '../UI/Screens/Home'
import Login from '../UI/Screens/Login'
import Navbar from "../UI/NavbarComponents/index"
import Footer from '../UI/FooterComponents'
import ErrorPage from '../UI/Screens/Error'
const Routings = () => {
  const location=useLocation();
    const isHome = location.pathname === '/';

    return (
      <>
        {!isHome && <Navbar />} {/* only render Navbar if not on the home page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />





          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </>
    );
  };
export default Routings