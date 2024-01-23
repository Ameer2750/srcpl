import React from 'react'
import image1 from '../assets/card3.jpg'
import image2 from '../assets/testing3.jpg'

const Principles = () => {
  return (

    <div className='bg-[#f8f8f8] py-20'>

      <div className='text-center '>
        <h1 id='mitsubishi-electric-india'className='text-4xl text-orange-500 py-14 bg-gray-200 text-center font-semibold'>Principles</h1>
      </div>
      <div className='my-24  flex flex-col gap-24 py-14   '>
        <div className='flex flex-row justify-between py-24  bg-blue-950 '>
          <img src={image1} className='mx-7  my-7 w-[50%] h-[450px]' />
          <div className=''>
            <h1 className='w-[50%] mx-32 py-14 text-xl text-orange-500 font-semibold '>Mitsubishi Electric India</h1>
            <div className='mx-8 text-justify leading-8 -mt-6 flex flex-col gap-5 text-gray-400 font-semibold text-md ' >

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

        <div className='flex flex-row justify-between py-24 px-6   bg-blue-950  '>
          <div>
            <h1 id='phoenix-contact-beijer-sick' className='w-[50%] mx-32 py-14 text-xl text-orange-500 font-semibold'>Pheonix Contact Beijer Sick</h1>
            <div className='mx-8 text-justify flex flex-col gap-5 leading-8 -mt-6  text-gray-400 font-semibold text-md  '>
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

          <img src={image2} className='w-[50%] mx-7 my-7  h-[450px]' />
        </div>
      </div>


    </div>

  )
}

export default Principles