import React, { useState } from 'react';
import SimpleSlider from './SimpleSlider';
import { IoLogoChrome } from 'react-icons/io';
import img from '../../assets/testing.png'
import { MdArrowForwardIos } from 'react-icons/md';

const MultipleSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // This is the property controlling the number of slides shown
        slidesToScroll: 1
    };

    return (
        <div>
            <div  >
                <SimpleSlider {...settings}>
                    <div className='mx-4 '>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className=''>
                                <img src={img} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1>By Admim | Digital Marketing</h1>
                                <h1>Everyone Loves Competition</h1>
                                <p>
                                    “ There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure”
                                </p>

                                <div className='flex flex-row  gap-2 text-orange-500 items-center  '>
                                    <button>Read More</button>
                                    <MdArrowForwardIos className='my-2 text-lg' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-4'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className=''>
                                <img src={img} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1>By Admim | Digital Marketing</h1>
                                <h1>Everyone Loves Competition</h1>
                                <p>
                                    “ There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure”
                                </p>

                                <div className='flex flex-row  gap-2 text-orange-500 items-center  '>
                                    <button>Read More</button>
                                    <MdArrowForwardIos className='my-2 text-lg' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-4'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className=''>
                                <img src={img} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1>By Admim | Digital Marketing</h1>
                                <h1>Everyone Loves Competition</h1>
                                <p>
                                    “ There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure”
                                </p>

                                <div className='flex flex-row  gap-2 text-orange-500 items-center  '>
                                    <button>Read More</button>
                                    <MdArrowForwardIos className='my-2 text-lg' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-4'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className=''>
                                <img src={img} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1>By Admim | Digital Marketing</h1>
                                <h1>Everyone Loves Competition</h1>
                                <p>
                                    “ There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure”
                                </p>

                                <div className='flex flex-row  gap-2 text-orange-500 items-center  '>
                                    <button>Read More</button>
                                    <MdArrowForwardIos className='my-2 text-lg' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-4'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className=''>
                                <img src={img} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1>By Admim | Digital Marketing</h1>
                                <h1>Everyone Loves Competition</h1>
                                <p>
                                    “ There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure”
                                </p>

                                <div className='flex flex-row  gap-2 text-orange-500 items-center  '>
                                    <button>Read More</button>
                                    <MdArrowForwardIos className='my-2 text-lg' />
                                </div>
                            </div>
                        </div>

                    </div>

                </SimpleSlider>
            </div>
        </div>
    );
};

export default MultipleSlider;


