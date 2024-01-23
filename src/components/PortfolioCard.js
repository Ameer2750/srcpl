import React from 'react';
import folioImage from '../assets/Vizion-spire-360x400.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';


const PortfolioCard = (props) => {

    const navigate = useNavigate();
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // Set the height to the desired value
        width: '209px'
    };





    const handleClick = () => {

        props.handlePortfolioData(props.no)
        navigate('/portfolio-page')

    }

    return (
        <div className="min-h-screen flex items-center justify-center  -mx-10">
            <div className="max-w-md w-full">
                <div className="card rounded-lg overflow-hidden shadow-lg" style={cardStyle}>
                    <div className="px-5 py-3 bg-opacity-75 flex justify-center my-24 ">
                        <div className='flex flex-row items-center justify-center bg-black p-1 rounded-sm hover:bg-orange-500'>
                            <div onClick={handleClick} className='flex flex-col justify-center items-center px-4 py-4 rounded-2xl  '>
                                <div className='w-28 h-24 '>
                                    <button className=' text-lg   font-semibold text-white  rounded-md '>{props.text}</button>
                                    <IoIosArrowDroprightCircle className='  w-5 h-5 bg-orange-500 hover:bg-white mx-14 my-2 ' />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PortfolioCard;
