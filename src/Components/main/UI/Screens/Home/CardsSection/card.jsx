import React from 'react'

const Card = (props) => {
  return (
    <>
        <div class="p-4 md:w-1/3 ease-in-out duration-300 hover:scale-105 cursor-pointer">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={props.image}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        {props.name}
                      </h1>
                      <p class="leading-relaxed mb-3">
                        {props.address}
                      </p>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Card