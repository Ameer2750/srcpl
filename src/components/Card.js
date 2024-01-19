import React from 'react';
import card from '../assets/Vizion-spire-360x400.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Card = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // Set the height to the desired value
        width: '250px'
    };

    return (
        <div className="min-h-screen flex items-center justify-center mx-4">
            <div className="max-w-md w-full">
                <div className="card rounded-lg overflow-hidden shadow-lg" style={cardStyle}>
                    <div className="px-5 py-3 bg-opacity-75 flex justify-center my-24 ">
                        <div className='flex flex-row items-center justify-center bg-black p-3 rounded-sm hover:bg-orange-500  '>
                            <button className=' text-lg  font-semibold    text-white  rounded-md  '>{props.text}</button>
                            {/* <IoIosArrowDroprightCircle className='bg-orange-500 hover:bg-white text-5xl rounded-3xl p-2    ' /> */}
  
                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Card;
