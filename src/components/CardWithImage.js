import React from 'react'
import { FaArrowCircleRight, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { FaArrowRightToCity } from 'react-icons/fa6'
import { MdArrowForwardIos } from 'react-icons/md'
const CardWithImage = (props) => {
    return (
        <div className=' flex flex-col gap-5 shadow '>

            <div className='flex flex-col gap-8'>
                <img src={props.img} />
            </div>
            <div className='flex flex-col mx-6 gap-4'>
                <h1 className='text-md text-orange-500 font-semibold'>
                    {props.header}
                </h1>
                <h1 className='text-lg font-semibold hover:text-orange-500'>
                    {props.subHeader}
                </h1>
                <p className='text-md text-gray-400 '>
                    {props.para}
                </p>
                <div className='flex flex-row hover:text-blue-950 gap-2 text-orange-500 items-center  '>
                    <button>Read More</button>
                    <MdArrowForwardIos className='my-2 text-lg' />
                </div>


            </div>





















        </div>
    )
}

export default CardWithImage