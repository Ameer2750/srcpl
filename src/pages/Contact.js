import React, { useEffect } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { MdArrowForwardIos, MdOutlineMailOutline } from 'react-icons/md'
import BgImage from '../assets/srcpl-images/about-job.jpg'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div className='bg-[#f8f8f8] '>

            <div className=' flex flex-row   relative justify-center  py-32 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
                backgroundImage: `linear-gradient(rgba(7, 9, 65, 1), rgba(7, 9, 65  , 0.8)), url(${BgImage})`

            }}>


                <h1 className='text-center text-4xl hover:text-orange-500 text-white font-semibold py-14'>Contact Us</h1>
            </div>

            <div data-aos='fade-down' data-aos-once='true'className='grid lg:grid-cols-3 grid-cols-1  lg:gap-10  items-center  lg:px-14 lg:my-14 lg:py-14 lg:mx-14 px-10 py-10 gap-5'>
                <div className='flex flex-col items-center bg-gray-100 px-8  py-10  gap-2 hover:shadow-2xl shadow'>
                    <CiLocationOn className='text-4xl ' />
                    <h1 className='text-xl font-semibold'>
                        Office Address
                    </h1>
                    <p className='text-gray-400 '>
                        4140 Parker Rd. , New Mexico
                    </p>
                    <p className='text-gray-400'>31134.</p>
                </div>

                <div className='flex flex-col items-center bg-gray-100 px-14  py-10  hover:shadow-2xl  shadow gap-2'>
                    <FiPhoneCall className='text-3xl ' />
                    <h1 className='text-xl font-semibold'>
                        Phone Number

                    </h1>
                    <p className='text-gray-400 '>
                        (316) 555-0116

                    </p>
                    <p className='text-gray-400'>(316) 555-0118

                    </p>
                </div>
                <div className='flex flex-col items-center bg-gray-100 px-14  py-10  hover:shadow-2xl shadow gap-2'>
                    <MdOutlineMailOutline className='text-4xl ' />
                    <h1 className='text-xl font-semibold'>
                        Email
                    </h1>
                    <p className='text-gray-400 '>
                        example@gmail.com
                    </p>
                    <p className='text-gray-400'>support@gmail.com

                    </p>
                </div>
            </div>

            <div  className='flex lg:flex-row flex-col lg:gap-14  py-10 lg:mx-14 lg:px-0 px-12    '>
                <div data-aos='fade-right' data-aos-once='true' className='flex flex-col lg:px-12  gap-10 py-10 lg:shadow-2xl'>
                    <div className='flex flex-col gap-3'>
                        <h1 id='contact-us' className='text-5xl'>Contact <b className='text-orange-500'>Us</b></h1>
                        <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <form className='flex flex-col gap-5  '>
                        <div className='flex lg:flex-row flex-col justify-between gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-semibold text-gray-400 '>First Name (required)</label>
                                <input
                                    type='text'
                                    name='name'
                                    className='border border-gray-500 px-3 py-3 rounded-md'
                                />
                            </div>
                            <div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md font-semibold text-gray-400 '>Last Name (required)</label>
                                    <input
                                        type='text'
                                        name='name'
                                        className='border border-gray-500 px-3 py-3  rounded-md'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-md font-semibold text-gray-400 '>Subject</label>
                            <input
                                type='text'
                                name='name'
                                className='border   border-gray-500 px-3 py-3  rounded-md'

                            />
                            <label className='text-md font-semibold text-gray-400 '>Your Message</label>
                            <textarea className='border border-gray-500 px-3 py-3  rounded-md'
                            >

                            </textarea>
                        </div>

                        <div className='my-2'>
                            <button className=' px-10 py-3 text-md rounded-md  text-white font-semibold hover:text-orange-500 bg-orange-500 hover:bg-blue-950 '>Send Message</button>
                        </div>

                    </form>



                </div >
                <div data-aos='fade-left' data-aos-once='true' className="w-full lg:shadow-2xl   lg:h-[650px] h-[300px] lg:mt-1 mt-10">
                    <iframe
                        title="hyderabad"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250523.07443607997!2d78.3915974618563!3d17.60335034654132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc7e5197a9ca27%3A0x1637a4125d8c58e5!2sSri%20Vidya%20Saraswathi%20Shani%20Temples%20Wargal!5e0!3m2!1sen!2sin!4v1704543735228!5m2!1sen!2sin"
                        style={{ border: "0", width: "100%", height: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>



        </div>
    )
}

export default Contact