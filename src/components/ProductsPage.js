import React, { useEffect } from 'react'
import pageImage from '../assets/card2.jpg'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { dataP } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css'


const ProductsPage = (props, { handleProductsData }) => {

    const { productId } = useParams();
    console.log('productId: ', productId);
    console.log('dataP: ', dataP[productId]);

    const data = dataP[productId]
    console.log('data: ', data);


    
    useEffect(() => {

        Aos.init({ duration: 1000 })


    })




    
    return (
        <div className=' flex flex-col gap-2  justify-center bg-white '>
            <div className=' flex flex-row relative justify-center    py-48 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
                backgroundImage: `linear-gradient(rgba(7, 9, 65, 0.1), rgba(7, 9, 65, 0.8 )), url(${data.BgImage})`
            }}>
               
                {data.subHeader &&
                    <div className='text-4xl font-semibold text-center text-white hover:text-orange-500  mb-6'>
                        {data.subHeader}
                    </div>
                }
            </div>
           
            {data.para &&
                <div className='text-lg font-lg text-gray-400 lg:mx-14 lg:px-0 px-10 lg:text-start text-justify '>
                    <p>{data.para}</p>
                </div>
            }

            <div  data-aos='fade-down' data-aos-delay='300' data-aos-once='true'className='grid lg:grid-cols-3 grid-cols-1 gap-5 py-20 mx-14'>

                {data.subContent && data.subContent.map((i) => {
                    console.log('i: ', i);
                    return (
                        <div className='flex flex-col justify-between  items-center  rounded-xl px-10 py-10  bg-white shadow'>

                            <div className='flex flex-col gap-10'>
                                <Link to={i.buttonLink}>

                                    <div className='bg-white  '>
                                        <img src={i.img} className='object-contain w-72' />
                                    </div>
                                </Link>


                                <div className='flex flex-col  gap-5'>
                                    <Link to={i.buttonLink}>
                                        <h1 className='text-center text-2xl font-semibold hover:text-orange-500'>{i.subHeader}</h1>
                                    </Link>
                                    <p className='text-justify text-md font-normal leading-9 text-gray-900'>{i.para}</p>
                                </div>
                            </div>
                            <div className='text-orange-500 hover:text-blue-950'>
                                {i.buttonLink && <Link to={i.buttonLink}>Read More +</Link>}
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default ProductsPage
