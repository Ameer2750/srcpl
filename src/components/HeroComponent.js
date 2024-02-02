import React from 'react'
import HeroImage from '../assets/Vizion-manu-shapvedio.png'
import { Link } from 'react-router-dom'

const HeroComponent = () => {
    return (
        <div className='pb-20 -mt-14 '>

            <div className=' flex flex-row  px-10 bg-cover lg:py-48 py-20 bg-blue-950 ' style={{
                backgroundImage: `linear-gradient(rgba(150, 90, 17, 1), rgba(150, 90, 17, 0.1)), url(${HeroImage})`

            }}>

                <div className='flex flex-col gap-5 lg:m-auto lg:-mr-8  lg:py-32  lg:w-[50%]'>
                    <h1 className='text-white font-bold lg:text-7xl text-4xl text-justify lg:text-end'><b className='text-blue-950'>AI</b> Manufacturing</h1>
                    <p className='lg:text-xl text-lg lg:ml-20 font-normal text-[#fff]'>Accelerate innovation and optimize costs by migrating and modernizing with AWS.</p>
                    <div className='flex flex-col lg:items-end '>
                       <Link to='/contact-us'>
                        <button className='text-white  bg-orange-500 hover:bg-blue-950 hover:text-orange-500  rounded-lg lg:px-10 px-7 py-2 font-bold  '>Contact Us</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HeroComponent