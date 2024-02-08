import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-[#02111e] lg:pt-2 lg:pb-1 lg:px-14 px-10'>


            <div className='flex lg:flex-row flex-col lg:justify-between border-b border-b-gray-500 py-14 gap-14 '>
                <div className='flex flex-col gap-5 mx-4'>
                    <Link to='/'>
                        <div className='w-32'><img src={logo} className='' /></div>
                    </Link>
                    <p className='text-md text-gray-500 hover:text-orange-500'>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                    <p className='text-md text-gray-500 hover:text-orange-500'>+0123456789</p>
                    <p className='text-md text-gray-500 hover:text-orange-500'>support@example.com</p>
                    <p className='text-md text-orange-500 '>www.vision.iqonicdesign.com</p>
                </div>

                <div className='flex flex-col gap-5 lg:px-0 px-4 '>
                    <h1 className='text-2xl text-white font-semibold'>Useful Links</h1>
                    <div className='flex lg:flex-row flex-col gap-5'>

                        <ul className='flex flex-col  gap-5  '>
                            <Link to='/about-us'>
                                <li className='text-md text-gray-500 fond-semibold hover:text-orange-500'>About Us</li>
                            </Link>
                            <Link to='/solutions'>
                                <li className='text-md text-gray-500 fond-semibold hover:text-orange-500'>Solutions</li>
                            </Link>
                            <Link to='/principles'>
                                <li className='text-md text-gray-500 fond-semibold hover:text-orange-500'>Principles</li>
                            </Link>
                            {/* <li className='text-md text-gray-500 fond-semibold hover:text-orange-500'>Pricing</li> */}
                        </ul>

                        <ul className='flex flex-col  gap-5  '>
                            <Link to='/our-portfolio'>
                                <li className='text-md fond-semibold text-gray-500 hover:text-orange-500'>Our Portfolio</li>
                            </Link>
                            {/* <li className='text-md fond-semibold text-gray-500 hover:text-orange-500'>Privacy Policy</li> */}
                            <Link to='/contact-us'>
                                <li className='text-md fond-semibold text-gray-500 hover:text-orange-500'>Contact Us</li>
                            </Link>

                            {/* <li className='text-md fond-semibold text-gray-500 hover:text-orange-500'>FAQ</li> */}

                        </ul>
                    </div>



                </div>
                <div className='flex flex-col gap-5 lg:mx-4 lg:px-0'>
                    <h1 className='text-2xl text-white font-semibold'>Subscribe</h1>
                    <p className='text-md font-semibold text-gray-500'>It’s The Bright One, It’s The Right One, That’s Newsletter.</p>
                    <div className=' flex lg:flex-row flex-col  lg:gap-0 gap-2 '>
                        <div>                        <input
                            type='text'
                            name='email'
                            className=' text-black p-2  lg:rounded-l-md '
                            placeholder='Your email address'

                        />
                        </div>

                        <div>
                            <button className='bg-orange-500   text-white hover:text-orange-500 hover:bg-blue-950 p-2  lg:rounded-r-md   font-semibold'>Submit</button>
                        </div>

                    </div>

                </div>
            </div>

            <div className='flex lg:flex-row flex-col  lg:justify-between lg:items-start  items-center  py-5  gap-4 lg:px-0 px-10'>

                <p className='text-gray-500 text-start '>© 2024 vizion All Rights Reserved.</p>

                <div className='flex flex-row   gap-7 '>
                    <FaFacebook color='white' className='text-2xl  hover:bg-orange-500 p-1 ' />
                    <FaSquareXTwitter color='white' className='text-2xl  hover:bg-orange-500 p-1' />
                    <FaInstagram color='white' className='text-2xl  hover:bg-orange-500 p-1' />
                    <FaLinkedin color='white' className='text-2xl  hover:bg-orange-500 p-1' />
                </div>
            </div>
        </div>
    )
}

export default Footer