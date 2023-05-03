import React from 'react'
import Banner from './Banner'
import Menu from "./Menu.js"
import { useParams } from "react-router-dom";
const Restaurant = () => {
  const {id}=useParams()
  return (
    <>
        <Banner id={id}/>
        <Menu id={id}/>
    </>
  )
}

export default Restaurant