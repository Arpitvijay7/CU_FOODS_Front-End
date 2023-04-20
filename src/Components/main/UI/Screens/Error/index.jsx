import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Fragment>
        <div className='h-[50vh] grid place-items-center bg-rose-300'>
            <div className='text-4xl font-bold'>Error 404 , Page not Found. Go <span className='hover:underline text-blue-600'><Link to="/">Home</Link></span></div>
        </div>
    </Fragment>
  )
}

export default ErrorPage