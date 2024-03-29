import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Header = () => {




    return (
        <div className=' lg:flex lg:flex-row lg:justify-between lg:items-center  lg:shadow lg:py-2 lg:bg-[#02111e] hidden'>
            <div className='flex flex-row justify-start items-center gap-14 mx-6'>
                <div className='flex flex-row items-center gap-4'>
                    <MdOutlineMailOutline className='text-4xl p-1  text-red-500 bg-[#081528] ' />
                    <div className='flex flex-col  items-start'>
                        {/* <h1 className='text-lg text-white hover:text-orange-500 font-semibold'>E-Mail</h1> */}
                        <p className='text-md text-white hover:text-orange-500 '>ssr@srautomations.com</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <CiLocationOn className='text-4xl p-1 text-red-500 bg-[#081528] ' />

                    <div>
                        {/* <h1 className='text-lg text-white font-semibold hover:text-orange-500'>Location</h1> */}
                        <p className='text-md text-white hover:text-orange-500 '>S. R. GROUPS
                            Hyderabad – 500055 Telangana, India </p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <FiPhoneCall className='text-4xl p-1 text-red-500 bg-[#081528] ' />

                    <div >
                        {/* <h1 className='text-lg hover:text-orange-500 text-white font-semibold'>Contact Number </h1> */}
                        <p className=' text-white hover:text-orange-500'>+91 9100994182</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row text-white gap-2 px-4 py-2 rounded-md mx-8  items-center justify-end bg-orange-500 hover:bg-white hover:text-black'>
                <IoIosSearch className='text-2xl' />

                <button className='font-semibold text-md text-end '>Search</button>
            </div>



        </div>

    )
}

export default Header