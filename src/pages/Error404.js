import React from 'react'
import "../assets/pokebola.png"
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='w-1/2 h-1/2 top-1/2 left-1/2 flex fixed -translate-x-1/2 -translate-y-1/2 flex-col items-center text-9xl m-auto'>
        <div>ERROR</div>
        <div className='flex items-center'>
            <div>4</div>
            <img className='w-20 block m-auto' src={require("../assets/pokebola.png")} alt='error 404'/>
            <div>4</div>
        </div>
        <Link to='/'>
          <button className='btn btn-primary bg-primary-color border-secondary-color text-secondary-color hover:text-primary-color hover:bg-white mt-5'>Return to Home Page</button>
        </Link>
    </div>
  )
}

export default Error404