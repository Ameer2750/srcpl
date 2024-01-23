import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import { MdArrowForwardIos, MdOutlineMailOutline } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='py-20 bg-[#f8f8f8] '>

            <div>
                <h1 className='text-4xl text-orange-500 py-14 bg-gray-200 text-center font-semibold'>Contact Us</h1>
            </div>

            <div className='flex flex-row justify-between items-center px-14 py-24 mx-14 '>
                <div className='flex flex-col items-center bg-gray-100 px-14 py-14 gap-2'>
                    <CiLocationOn className='text-4xl ' />
                    <h1 className='text-xl font-semibold'>
                        Office Address
                    </h1>
                    <p className='text-gray-400 '>
                        4140 Parker Rd. , New Mexico
                    </p>
                    <p className='text-gray-400'>31134.</p>
                </div>

                <div className='flex flex-col items-center bg-gray-100 px-24 py-14 gap-2'>
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
                <div className='flex flex-col items-center bg-gray-100 px-24 py-14 gap-2'>
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

            <div className='flex flex-row gap-14 my-20 mx-14'>
                <div className='flex flex-col px-12 gap-14'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl'>Contact <b className='text-orange-500'>Us</b></h1>
                        <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-row justify-between gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-semibold text-gray-400 '>Your Name (required)</label>
                                <input
                                    type='text'
                                    name='name'
                                    className='border border-gray-500 px-3 py-3 rounded-md'
                                />
                            </div>
                            <div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-md font-semibold text-gray-400 '>Your Name (required)</label>
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



                </div>
                <div className="w-full h-[500px] mt-5">
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