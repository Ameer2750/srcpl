import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";



const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center  shadow py-5 bg-[#f8f8f8]'>
            <div className='flex flex-row justify-start items-center gap-14 mx-6'>
                <div className='flex flex-row items-center gap-4'>
                    <MdOutlineMailOutline className='text-4xl p-1  text-red-500 bg-gray-100 ' />
                    <div className='flex flex-col  items-start'>
                        <h1 className='text-lg hover:text-orange-500 font-semibold'>E-Mail</h1>
                        <p className='text-md '>support@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <CiLocationOn className='text-4xl p-1 text-red-500 bg-gray-100 ' />

                    <div>
                        <h1 className='text-lg font-semibold hover:text-orange-500'>Location</h1>
                        <p className='text-md '>8502 Preston Rd. Maine 98380</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <FiPhoneCall className='text-4xl p-1 text-red-500 bg-gray-100 ' />

                    <div >
                        <h1 className='text-lg hover:text-orange-500 font-semibold'>Contact Number </h1>
                        <p className=' '>+114 1234 259 </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row text-white gap-2 px-6 py-2 rounded-md mx-4  items-center justify-end bg-orange-500 hover:bg-blue-950 hover:text-orange-500 '>
                <IoIosSearch className='text-2xl'/>

                <button className='font-semibold text-lg text-end '>Search</button>
            </div>



        </div>

    )
}

export default Header