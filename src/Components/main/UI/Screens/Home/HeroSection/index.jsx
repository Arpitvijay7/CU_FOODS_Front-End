import React from 'react'
import "./HeroStyles.css"
const HeroSection = () => {
  return (
    <>
      <div className='max-w-screen bg-cover h-[60vh] HeroSection relative'>
          <div className='text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl text-white max-w-screen'>
              <div className='flex justify-between p-5 lg:p-10'>
              <div>CU FOODS</div>
              <div className='flex justify-between w-36 md:w-56'>
                <div>
                  Login
                </div>
                <div>
                  Sign Up
                </div>
              </div>
              </div>
          </div>

          <div className='mt-10 md:mt-5 h-2/3'>
             <div className='h-full flex flex-col place-items-center'>
              <div className='w-full text-white'>
                <div className='text-6xl font-bold'>CU FOODS</div>
                <div className='pt-8'><p className='font-semibold text-xl md:text-4xl'>Discover the best food & drinks in <span className='font-bold'>Chandigarh University</span></p></div>
              </div>
              <div className='bg-pink-800 w-full md:w-2/3'>
                b
              </div>
             </div>
          </div>

      </div>
    </>
  )
}

export default HeroSection