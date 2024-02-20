import React, { useEffect } from 'react'
import aboutImage from '../assets/card3.jpg'
import { RiHandCoinLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import Slider from '../components/slider/Slider';
import BgImage from'../assets/srcpl-images/about3.jpg'
import MultipleSlider from '../components/slider/MultipleSlider';
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
})


  return (

    <div className='bg-[#f8f8f8]  '>

      <div className=''>
        <div className=' flex flex-row   relative justify-center  py-32 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
          backgroundImage: `linear-gradient(rgba(7, 9, 65, 1), rgba(7, 9, 65  , 0.8)), url(${BgImage})`

        }}>


          <h1 className='text-center text-4xl hover:text-orange-500 text-white font-semibold py-14'>About Us</h1>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-between items-center lg:px-14 px-10 lg:my-24 py-10 lg:mx-8 lg:gap-10 gap-5'>
          <div data-aos='fade-left' data-aos-once='true' className='flex flex-col lg:w-[50%] lg:-mt-10 gap-4'>
            <h1 id='about-srcpl' className='text-3xl text-orange-500 lg:text-start text-center  font-semibold'>About SRCPL</h1>
            <p className='text-lg leading-7 lg:text-start text-justify text-gray-400'>Discover the latest breakthroughs in industrial automation solutions at SRCPL. We are thrilled to unveil recent advancements that underscore our commitment to staying at the forefront of technology. From enhanced Shop Floor Control Panels to innovative Cloud Integrations, our updates are designed to elevate industries to new heights. Our Mission
              At the heart of [SRCPL]'s mission is a dedication to crafting bespoke factory automation solutions. From the intricacies of control panels to the expansiveness of cloud-based systems, our mission is to redefine industrial processes, making them more efficient, intelligent, and adaptive.
            </p>
          </div>
          <div data-aos='fade-right' data-aos-once='true'className='lg:w[50%]'>
            <img src={aboutImage} className='lg:h-[350px] object-contain' />
          </div>
        </div>
        <div data-aos='fade-up' data-aos-once='true' className='flex lg:flex-row flex-col lg:justify-between items-center gap-5  lg:px-14 lg:mx-8 lg:-mt-10 px-10 py-10'>
          <RiHandCoinLine  className='text-8xl text-orange-500 bg-gray-50 px-2 py-0' />


          <div className='flex flex-col '>
            <h1 className='text-md text-orange-500 font-semibold'>100% Customer Satisfaction</h1>
            <p className='text-md text-gray-400 font-normal'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <FaAward className='text-8xl text-orange-500 bg-gray-50 lg:px-2 lg:py-0' />

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
            <p className='text-lg leading-7 lg:text-start text-center text-gray-400'>
              Discover the latest breakthroughs in industrial automation solutions at SRCPL
            </p>

          </div>
          <div className='my-20 bg-orange-500'>
            <Slider />
          </div>
          {/* <div className='py-10 my-14'>
            <h1 id='sr-group-overview' className='text-3xl text-orange-500 font-semibold text-center '>S.R Group Overview</h1>
          </div>
          <div className='bg-gray-200 py-14'>
            <MultipleSlider color="orange" />
          </div> */}

          <div className='my-14 text-center'>
            {/* <h1 id='awards-recognitions' className='text-3xl text-orange-500 font-semibold'>Awards & Recognitions</h1> */}

          </div>
        </div>
      </div>


    </div>
  )
}

export default About