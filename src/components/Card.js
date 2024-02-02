import React from 'react';
import card from '../assets/Vizion-spire-360x400.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const Card = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // Set the height to the desired value
        width: '250px'
    };

    return (
        <div className="lg:min-h-screen flex flex-col lg:flex-row  lg:items-center items-end lg:justify-center lg:gap-0 gap-5 lg:mx-4">
            <div className="max-w-md w-full">
                <div className="card rounded-lg overflow-hidden shadow-lg" style={cardStyle}>
                    <div className="px-5 py-3 bg-opacity-75 flex justify-center my-48 ">
                    <div className='flex flex-row items-center   rounded-xl bg-orange-500 font-semibold'>
                                <Link to='/'>
                                    <button className=' text-lg w-48 h-14 hover:bg-blue-950 text-white hover:text-orange-500 rounded-md '>{props.text}</button>
                                    {/* <IoIosArrowDroprightCircle className='bg-orange-500 w-10 h-10 hover:bg-white mx-14 my-2 ' /> */}
                                </Link>
                            </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Card;
