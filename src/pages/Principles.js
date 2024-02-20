import React, { useEffect } from 'react'
import image1 from '../assets/card3.jpg'
import image2 from '../assets/testing3.jpg'
import BgImage from '../assets/srcpl-images/about3.jpg'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
const Principles = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
})

  
  return (

    <div className='bg-[#f8f8f8] '>

      <div className='text-center '>
        <div className=' flex flex-row   relative justify-center  py-32 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
          backgroundImage: `linear-gradient(rgba(7, 9, 65, 1), rgba(7, 9, 65  , 0.8)), url(${BgImage})`

        }}>

          <h1 id='mitsubishi-electric-india' className='text-4xl hover:text-orange-500 text-white py-14  text-center font-semibold'>Principles</h1>
        </div>
      </div>
      <div className='my-24  flex flex-col lg:gap-24 lg:py-14   '>
        <div className='flex lg:flex-row flex-col lg:justify-between py-24    bg-blue-950 '>
          <img src={image1} className='lg:mx-7  lg:my-7 lg:px-0 px-10 lg:w-[50%] lg:h-[450px]' />
          <div className=''>
            <h1 className='lg:w-[50%] lg:mx-32 lg:px-0 px-10 py-14 text-xl text-orange-500 font-semibold lg:text-start text-center'>Mitsubishi Electric India</h1>
            <div className='lg:mx-8 lg:px-0 px-10 text-justify leading-8 -mt-6 flex flex-col gap-5 text-gray-400 font-semibold text-md ' >

              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
            </div>
          </div>


        </div>

        <div className='flex lg:flex-row flex-col lg:justify-between lg:py-24 lg:pb-10 pb-10 lg:px-6   bg-blue-950  '>
          <div>
            <h1 id='phoenix-contact-beijer-sick' className='lg:w-[50%] lg:mx-32 py-14 lg:px-0 px-10 text-xl text-orange-500 lg:text-start text-center font-semibold'>Pheonix Contact Beijer Sick</h1>
            <div className='lg:mx-8 lg:px-0 px-10 text-justify flex flex-col gap-5 leading-8 lg:-mt-6  text-gray-400 font-semibold text-md  '>
              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
              <p>
                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

                Discover the latest breakthroughs in industrial automation solutions at SRCPL.

              </p>
            </div>

          </div>

          <img src={image2} className='lg:w-[50%] lg:mx-7 lg:my-7  lg:h-[450px] object-contain px-10 lg:px-0 py-10' />
        </div>
      </div>


    </div>

  )
}

export default Principles