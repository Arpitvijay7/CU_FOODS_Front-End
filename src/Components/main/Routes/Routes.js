import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from '../UI/Screens/Home'
import Login from '../UI/Screens/Login'
import Navbar from "../UI/NavbarComponents/index"
import Footer from '../UI/FooterComponents'
const Routings = () => {
  const location=useLocation();
    const isHome = location.pathname === '/';

    return (
      <>
        {!isHome && <Navbar />} {/* only render Navbar if not on the home page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    );
  };
export default Routings