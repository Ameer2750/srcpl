import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between shadow gap-2 bg-[#ffffff] sticky top-0'>
      <div className='w-32  my-3 '>
        <img src={logo} className='bg-blue-950 px-6 py-3 mx-4' />
        </div>
      
      
      <div className='my-5'>
      <ul className='flex flex-row gap-8 justify-between items-center'>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>Home</li>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>About Us</li>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>Solutions</li>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>Our Portfolio</li>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>Principles</li>
        <li className='text-lg text-black hover:text-orange-500 font-semibold'>Contact Us</li>
      </ul>
      </div>

    

      <button className='bg-orange-500 hover:bg-gray-500 px-8 mx-4 py-1 my-4 rounded-md text-lg text-white font-semibold'>Inquiry Now </button>


    </div>
  )
}

export default Navbar
