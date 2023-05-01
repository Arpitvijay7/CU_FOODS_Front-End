import React,{useState,useEffect} from 'react'
import HeroSection from "./HeroSection/index"
import CardsSection from "./CardsSection/index"
const Home = () => {
  return (
    <div className='text-center'>
      <HeroSection/>
      <CardsSection/>
    </div>
  )
}

export default Home