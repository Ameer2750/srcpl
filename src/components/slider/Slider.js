import React from 'react';
import SimpleSlider from './SimpleSlider';
import img from '../../assets/person1.png';
import img2 from '../../assets/person2.jpg';


const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        cssEase: 'linear',
 
    };

    return (
        <div className='  bg-[#081528] lg:p-24 lg:mx-14 px-10 py-10'>
            <SimpleSlider {...settings}>
                <div >
                    <div className='flex lg:flex-row flex-col lg:justify-between items-center  gap-14'>
                        <div className='lg:w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl text-start font-normal text-justify italic lg:w-[50%]'>
                            “ There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure”
                        </p>

                    </div>
                </div>

                <div >
                    <div className='flex lg:flex-row flex-col  lg:justify-between items-center  gap-14'>
                        <div className='lg:w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img2}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl text-start font-normal text-justify italic lg:w-[50%]'>
                            “ There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure”
                        </p>

                    </div>
                </div>



                <div >
                    <div className='flex lg:flex-row flex-col lg:justify-between items-center  gap-14'>
                        <div className='lg:w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img2}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl lg:text-start text-justify font-normal italic lg:w-[50%]'>
                            “ There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure”
                        </p>

                    </div>
                </div>

            </SimpleSlider>
        </div>
    );
};

export default Slider;
