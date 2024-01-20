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
        <div className='  bg-[#081528] p-24 mx-14'>
            <SimpleSlider {...settings}>
                <div >
                    <div className='flex flex-row justify-between items-center  gap-14'>
                        <div className='w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl text-start font-normal italic w-[50%]'>
                            “ There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure”
                        </p>

                    </div>
                </div>

                <div >
                    <div className='flex flex-row justify-between items-center  gap-14'>
                        <div className='w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img2}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl text-start font-normal italic w-[50%]'>
                            “ There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure”
                        </p>

                    </div>
                </div>



                <div >
                    <div className='flex flex-row justify-between items-center  gap-14'>
                        <div className='w-[50%]'> 
                            <img
                                style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                src={img2}
                                alt='Image 1'
                                className=''
                            />
                        </div>
                        <p className='text-gray-400 text-3xl text-start font-normal italic w-[50%]'>
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
