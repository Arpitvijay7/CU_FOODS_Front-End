import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../UI/Screens/Home'
import Login from '../UI/Screens/Login'
import Navbar from "../UI/NavbarComponents/index"
const Routings = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}
export default Routings