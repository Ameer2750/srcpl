import React from 'react'
import pageImage from '../assets/card2.jpg'


const PortfolioPage = (props) => {
    console.log('props portfolio page: ', props);
    return (
        <div className=' flex flex-col gap-2  justify-center bg-[#f8f8f8] py-10 '>
            {props.data.header &&
                <div id='' className='text-4xl text-orange-500 font-semibold bg-gray-200 py-14 text-center my-10'>
                    {props.data.header}
                </div>
            }
            {props.data.img &&
                <div className='mx-4 py-10'>
                    <img src={props.data.img} className='w-[100%]' />
                </div>
            }

            {props.data.subHeader &&
                <div className='text-4xl font-semibold text-center text-orange-500  mb-6'>
                    {props.data.subHeader}
                </div>
            }

            {props.data.para &&
                 <div className='text-lg font-lg text-gray-400 mx-14 '>
                 <p>{props.data.para}</p>
             </div>
            }

            {props.data.subContent && props.data.subContent.map((i) => {
                return (
                    <div>
                        <div className='p-5 mx-28'>
                            <div className='text-2xl font-semibold mb-2'>
                                <p>{i.subHeader}</p>
                            </div>

                            <div className='text-lg font-lg text-gray-400 '>
                                <p>{i.para}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default PortfolioPage