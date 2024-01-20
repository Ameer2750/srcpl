import React, { useState } from 'react';
import img from '../../assets/testing.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const slideData = [
    {
        id: 1,
        img: img,
        header: 'By Admim |Digital Marketing',
        subHeader: 'Everyone Loves Competition',
        para: "There are many variations of passages of Lorem Ipsum available,",
        buttonText: 'Read More...'
    },
    {
        id: 2,
        img: img,
        header: 'By Shahul| Digital Marketing',
        subHeader: 'Everyone Loves Competition',
        para: "There are many variations of passages of Lorem Ipsum available,",
        buttonText: 'Read More...'
    },
    {
        id: 3,
        img: img,
        header: 'By Riyas | Digital Marketing',
        subHeader: 'Everyone Loves Competition',
        para: "There are many variations of passages of Lorem Ipsum available,",
        buttonText: 'Read More...'
    },
    {
        id: 4,
        img: img,
        header: 'By Ameer | Digital Marketing',
        subHeader: 'Everyone Loves Competition',
        para: "There are many variations of passages of Lorem Ipsum available,",
        buttonText: 'Read More...'
    }
]

const MultipleSlider = (props) => {
    console.log('props: ', props.color, `bg-${props.color}-500`);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // This is the property controlling the number of slides shown
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div>
            <div className='w-3/4 m-auto ' >
                <div className='mt-20'>
                    <Slider {...settings}>
                        {slideData.map((data) => {
                            return (
                                <div key={data.id} className='bg-white h-[450px] text-black rounded-xl'>
                                    <div className={`h-56 rounded-t-xl bg-${props.color || 'orange'}-500 flex justify-center items-center`}>
                                        <img src={data.img} className='h-44 w-44 rounded-full ' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                        <h1 className='text-xl font-semibold '>{data.header}</h1>
                                        <h3>{data.subHeader}</h3>
                                        <p>
                                            {data.para}
                                        </p>
                                        <button className={`bg-${props.color || 'orange'}-500 text-white text-lg px-6 py-1 rounded-xl`}>{data.buttonText}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default MultipleSlider;


