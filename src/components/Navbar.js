import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className=' flex flex-row justify-between shadow my-0.5 items-center py-1 bg-[#ffffff] '>
      <div className='w-32 my-3 '>
        <img src={logo} className='bg-blue-950 px-2 py-3 mx-8' />
      </div>


      <div className='my-5'>
        <ul className='flex flex-row gap-8 justify-between  items-center '>
          <Link to="/">
            <li className='text-lg text-center text-black hover:text-orange-500 font-semibold'>Home</li>
          </Link>
          <Link to="/about-us">
            <li className='text-lg text-black  hover:text-orange-500 font-semibold'>About Us</li>
          </Link>
          <Link>
            <li className='text-lg text-black hover:text-orange-500 font-semibold'>Solutions</li>
          </Link>
          <Link to='our-portfolio'>
            <li className='text-lg text-black hover:text-orange-500 font-semibold'>Our Portfolio</li>
          </Link>
          <Link to='/'>
            <li className='text-lg text-black hover:text-orange-500 font-semibold'>Principles</li>
          </Link>
          <Link to='contact-us'>
            <li className='text-lg text-black hover:text-orange-500 font-semibold'>Contact Us</li>
          </Link>
        </ul>
      </div>



      <button className='bg-orange-500 hover:bg-gray-500 px-4 mx-4 py-2 my-4 rounded-md text-lg text-white font-semibold'>Inquiry Now </button>


    </div>
  )
}

export default Navbar
