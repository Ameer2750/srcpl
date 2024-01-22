import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
      

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    

  };
  

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
          {/* Solutions Dropdown */}
          <li className='relative group' onClick={toggleDropdown}>
            <Link to='/solutions' className='text-lg text-black hover:text-orange-500 font-semibold'>
              Solutions
            </Link>
            <ul
              className={`${isDropdownOpen ? 'block' : 'hidden'
                } absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10`}
            >
              <li>
                <Link to='/solutions/subpage1' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Subpage 1
                </Link>
              </li>
              <li>
                <Link to='/solutions/subpage2' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Subpage 2
                </Link>
              </li>
              {/* Add more subpages as needed */}
            </ul>
          </li>

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
