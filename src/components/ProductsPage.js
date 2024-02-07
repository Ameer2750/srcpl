import React from 'react'
import pageImage from '../assets/card2.jpg'
import { Link } from 'react-router-dom';


const ProductsPage = (props) => {
    console.log('props portfolio page: ', props);
    return (
        <div className=' flex flex-col gap-2  justify-center bg-[#f8f8f8] py-10 '>
            {props.data?.header &&
                <div id='' className='text-4xl text-orange-500 font-semibold bg-gray-200 py-14 text-center my-10'>
                    {props.data?.header}
                </div>
            }
            {props.data.img &&
                <div className='mx-4 py-10'>
                    <img src={props.data?.img} className='w-[100%]' />
                </div>
            }

            {props.data.subHeader &&
                <div className='text-4xl font-semibold text-center text-orange-500  mb-6'>
                    {props.data.subHeader}
                </div>
            }

            {props.data.para &&
                <div className='text-lg font-lg text-gray-400 lg:mx-14 lg:px-0 px-10 lg:text-start text-justify '>
                    <p>{props.data.para}</p>
                </div>
            }

            <div className='grid grid-cols-3 gap-5 mx-14'>

                {props.data.subContent && props.data.subContent.map((i) => {
                    console.log('i: ', i);
                    return (
                        <div className='flex flex-col justify-between  items-center  rounded-xl px-10 py-10  bg-white shadow'>

                            <div className='flex flex-col gap-10'>
                                <div className='bg-white  '>
                                    <img src={i.img} className='object-contain w-64' />
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <h1 className='text-center text-2xl font-semibold hover:text-orange-500'>{i.subHeader}</h1>
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


{/* <div className='flex flex-col items-center gap-8 rounded-xl px-10 py-10  bg-white shadow'>

            
<div className='bg-white  '>
    <img src={props.img} className='object-contain' />
</div>
<div className='flex flex-col gap-5'>
    <h1 className='text-center text-2xl font-semibold text-orange-500'>{props.heading}</h1>
    <p className='text-justify text-md font-normal leading-9 text-gray-900'>{props.para}</p>
</div>
<div className='text-center text-orange-500  hover:text-blue-950'>
    <Link to='' >
        {props.button}
    </Link>
</div>
<div className=''>
<img src={props.cornerimg}/>
</div>

</div> */}