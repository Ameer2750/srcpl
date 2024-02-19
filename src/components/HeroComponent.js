import React from 'react'
import HeroImage from '../assets/srcpl-images/banner-bg.jpeg'
import { Link } from 'react-router-dom'

const HeroComponent = () => {
    return (
        <div className=' '>

            <div className=' flex flex-row   lg:px-10  bg-cover  py-40 bg-blue-950 ' style={{
                 backgroundImage: `linear-gradient(rgba(148, 187, 233, 0), rgba(148, 187, 233, 0)), url(${HeroImage})`

            }}>

            
        


                <div  data-aos='fade-down' data-aos-delay='300' data-aos-once='true'className='grid grid-cols-1 gap-5 lg:px-36'>
                    <h1 className='text-6xl text-white font-bold text-center  '>Discover your world in a whole new way</h1>
                    <p className='text-xl text-white font-semibold text-center'>Authorized Channel Partner for Mitsubishi Electric
                        Industrial Automation | Industrial 4.O | Industrial wireless | Turn Key Projects</p>
                    
                    <div className='flex flex-col items-center' >
                        <button className='text-xl  bg-orange-500 px-10 py-3 rounded-md text-white hover:text-orange-500 hover:bg-blue-950'>Discover More</button>
                    </div>
                </div>




                {/* <div className='flex flex-col gap-5 lg:m-auto lg:-mr-8  lg:py-32  lg:w-[50%]'>
                    <h1 className='text-white font-bold lg:text-7xl text-4xl text-justify lg:text-end'><b className='text-blue-950'>AI</b> Manufacturing</h1>
                    <p className='lg:text-xl text-lg lg:ml-20 font-normal text-[#fff]'>Accelerate innovation and optimize costs by migrating and modernizing with AWS.</p>
                    <div className='flex flex-col lg:items-end '>
                       <Link to='/contact-us'>
                        <button className='text-white  bg-orange-500 hover:bg-blue-950 hover:text-orange-500  rounded-lg lg:px-10 px-7 py-2 font-bold  '>Contact Us</button>
                        </Link>
                    </div>

                </div> */}
            </div>
        </div>

    )
}

export default HeroComponent