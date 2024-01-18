import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";



const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center  shadow '>
            <div className='flex flex-row justify-start items-center gap-14 my-5 mx-6'>
                <div className='flex flex-row items-center gap-4'>
                    <MdOutlineMailOutline className='text-4xl p-1  text-red-500 bg-gray-100 ' />
                    <div className='flex flex-col  items-start'>
                        <h1 className='text-lg font-semibold'>E-Mail</h1>
                        <p className='text-md '>support@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <CiLocationOn className='text-4xl p-1 text-red-500 bg-gray-100 ' />

                    <div>
                        <h1 className='text-lg font-semibold'>Location</h1>
                        <p className='text-md '>8502 Preston Rd. Maine 98380</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <FiPhoneCall className='text-4xl p-1 text-red-500 bg-gray-100 ' />

                    <div className='text-lg font-semibold'>
                        <h1>Contact Number </h1>
                        <p className='text-md '>+114 1234 259 </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row  items-center justify-end bg-gray-400  '>
                <IoIosSearch className='text-3xl text-white '/>

                <button className='px-5  py-2 text-white rounded border '>Search</button>
            </div>



        </div>

    )
}

export default Header