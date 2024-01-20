import React from 'react';
import folioImage from '../assets/Vizion-spire-360x400.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const PortfolioCard = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px', // Set the height to the desired value
        width: '200px'
    };

    return (
        <div className="min-h-screen flex items-center justify-center mx-4">
            <div className="max-w-md w-full">
                <div className="card rounded-lg overflow-hidden shadow-lg" style={cardStyle}>
                    <div className="px-5 py-3 bg-opacity-75 flex justify-center my-24 ">
                        <div className='flex flex-row items-center justify-center bg-black p-1 rounded-sm hover:bg-orange-500'>

                            <div className='flex flex-row items-center'>
                                <Link to='/portfolio-page'>
                                    <button className=' text-lg  font-semibold text-white  rounded-md '>{props.text}</button>
                                    {/* <IoIosArrowDroprightCircle className='bg-orange-500 hover:bg-white ' /> */}
                                </Link>
                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default PortfolioCard;
