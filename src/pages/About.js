import React from 'react'
import aboutImage from '../assets/card3.jpg'
import { RiHandCoinLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import Slider from '../components/slider/Slider';

import MultipleSlider from '../components/slider/MultipleSlider';

const About = () => {
  return (

    <div className='bg-[#f8f8f8] '>

      <div className='py-20'>
        <h1 className='text-center text-4xl text-orange-500 font-semibold bg-gray-200 py-14'>About Us</h1>

        <div className='flex flex-row justify-between items-center px-14 my-24 mx-8 gap-10'>
          <div className='flex flex-col w-[50%] -mt-10 gap-4'>
            <h1 id='about-srcpl' className='text-3xl text-orange-500 font-semibold'>About SRCPL</h1>
            <p className='text-lg leading-7 text-gray-400'>Discover the latest breakthroughs in industrial automation solutions at SRCPL. We are thrilled to unveil recent advancements that underscore our commitment to staying at the forefront of technology. From enhanced Shop Floor Control Panels to innovative Cloud Integrations, our updates are designed to elevate industries to new heights. Our Mission
              At the heart of [SRCPL]'s mission is a dedication to crafting bespoke factory automation solutions. From the intricacies of control panels to the expansiveness of cloud-based systems, our mission is to redefine industrial processes, making them more efficient, intelligent, and adaptive.
            </p>
            {/* <p className='text-lg text-gray-400' >
            Envision a future where industries seamlessly synchronize with intelligent automation. We, at SRCPL, strive to be the driving force behind this transformation. By amalgamating precision engineering with cutting-edge technology, our vision is to empower industries to achieve unprecedented levels of productivity, sustainability, and growth.
          </p> */}

          </div>
          <div className='w[50%]'>
            <img src={aboutImage} className='h-[350px]' />
          </div>
        </div>
        <div className='flex flex-row justify-between items-center gap-5  px-14 mx-8 -mt-10'>
          <RiHandCoinLine className='text-8xl text-orange-500 bg-gray-50 px-2 py-0' />


          <div className='flex flex-col '>
            <h1 className='text-md text-orange-500 font-semibold'>100% Customer Satisfaction</h1>
            <p className='text-md text-gray-400 font-normal'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <FaAward className='text-8xl text-orange-500 bg-gray-50 px-2 py-0' />

          <div className='flex flex-col '>

            <h1 className='text-md text-orange-500 font-semibold'>Quality Assurance Guarentee</h1>
            <p className='text-md text-gray-400 font-normal'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>

          </div>
        </div>

        <div className='py-24'>
          <div className='flex flex-col items-center gap-4 '>
            <h1 id='team-overview' className='text-3xl text-orange-500 font-semibold'>Team Overview</h1>
            <p className='text-lg leading-7 text-gray-400'>
              Discover the latest breakthroughs in industrial automation solutions at SRCPL
            </p>

          </div>
          <div className='my-20 bg-orange-500'>
            <Slider />
          </div>
          <div className='py-10 my-14'>
            <h1 id='sr-group-overview' className='text-3xl text-orange-500 font-semibold text-center '>S.R Group Overview</h1>
          </div>
          <div className='bg-gray-200 py-14'>
            <MultipleSlider color="orange" />
          </div>

          <div className='my-14'>
            <h1 id='awards-recognitions' className='text-3xl text-orange-500 font-semibold'>Awards & Recognitions</h1>
          
          </div>
        </div>
      </div>


    </div>
  )
}

export default About