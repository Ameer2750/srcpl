import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const ProductsCard = (props) => {
    console.log('props: ', props);

    useEffect(() => {
        Aos.init({ duration: 1000 })

    })

    const navigate = useNavigate();
    const handleClick = () => {
        // props.handleProductsData(props.no)
        navigate(`/products-page/${props.no}`)
    }
    return (
        <div data-aos='zoom-in' data-aos-delay='300' data-aos-once='true' className='flex flex-col items-center justify-between gap-8 rounded-xl px-10 py-10 hover:shadow-2xl bg-white shadow'>


            <div className='flex flex-col  gap-10'>
                <div className='bg-white  '>
                  

                        <img src={props.img} className='object-contain w-72  rounded-tl-3xl rounded-br-3xl border-4 border-y-orange-500 border-x-orange-500'
                            onClick={handleClick} />
                    
                </div>

                <div className='flex flex-col  gap-10'>
                    <h1
                        onClick={handleClick}

                        className='cursor-pointer text-center text-2xl font-semibold  hover:text-orange-500'>{props.heading}</h1>
                    <p className='text-justify text-md font-normal leading-9 text-gray-900'>{props.para}</p>
                </div>
            </div>


            <div className='text-center text-orange-500  hover:text-blue-950'>
                <button onClick={handleClick}>
                    {props.button}
                </button>
            </div>
        </div>
    )
}

export default ProductsCard