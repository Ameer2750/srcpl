import React, { useEffect } from 'react'
import Card from '../components/Card'
import cardImage1 from '../assets/card1.jpg'
import cardImg1 from '../assets/Vizion-spire-360x400.jpg'
import missionImage from '../assets/srcpl-images/our-mission.jpg'
import bgImage from '../assets/Vizion-manu-02.png'
import bgImage2 from '../assets/Rectangle-1986-1.png'
import CardWithImage from '../components/CardWithImage'
import SimpleSlider from '../components/slider/SimpleSlider'
import Slider from '../components/slider/Slider'
import MultipleSlider from '../components/slider/MultipleSlider'
import HeroComponent from '../components/HeroComponent'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
import goalsbgImage from '../assets/srcpl-images/pattern2.png'


const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (

        <div className='bg-[#f8f8f8]  '>
            <div className=''>
                <HeroComponent />
            </div>

            <div data-aos='fade-down' data-aos-delay='300' data-aos-once='true' className='flex flex-col lg:mx-14 px-10 py-10'>
                <div className='flex lg:flex-row lg:justify-between  lg:mx-4 '>

                    <div className='flex flex-col  gap-6  '>
                        <h2 id='whats-new' className='text-4xl text-center font-bold text-orange-500 '>What's New</h2>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <p className='text-lg text-gray-400 '>Discover the latest breakthroughs in industrial automation solutions at SRCPL. We are thrilled to unveil recent advancements that underscore our commitment to staying at the forefront of technology. From enhanced Shop Floor Control Panels to innovative Cloud Integrations, our updates are designed to elevate industries to new heights.</p>
                           
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 py-10 lg:px-0 px-10 '>
                            <div data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className='flex flex-col gap-5'>
                                <h1 id='our-mission' className='text-4xl  py-10 font-bold text-orange-500 text-center '>Our Mission</h1>
                                <p className='text-lg text-gray-400 leading-9 text-justify '>
                                    At the heart of [SRCPL]'s mission is a dedication to crafting bespoke factory automation solutions. From the intricacies of control panels to the expansiveness of cloud-based systems, our mission is to redefine industrial processes, making them more efficient, intelligent, and adaptive.
                                </p>
                            </div>
                            <div data-aos='fade-right' data-aos-delay='300' data-aos-once='true'>
                                <img src={missionImage} />
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className='flex lg:flex-row flex-col lg:gap-0 gap-5 py-10 lg:justify-between lg:-mt-20  '>
                    <Card img={cardImg1} text={'Our Mission'} />
                    <Card img={cardImg1} text={'Our Vision'} />
                    <Card img={cardImg1} text={'Our Goals'} />
                    <Card img={cardImg1} text={'Our Presence in the Market'} />
                </div> */}
                {/* <div className='text-center lg:-mt-24'>
                    <button className=' px-12 py-3 text-md rounded-md mx-6 text-white font-semibold bg-orange-500 hover:bg-blue-950 hover:text-orange-500'>View All</button>
                </div> */}
            </div>

            <div className='bg-[#f8f8f8]'>
                <div className='lg:mx-14 lg:my-14 px-10 py-10'>
                    <div className='flex lg:flex-row flex-col '>
                        <div data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className='lg:w-[50%]'>
                            <img src={bgImage} className='lg:h-[500px] object-contain' />
                        </div>
                        <div data-aos='fade-right' data-aos-delay='300' data-aos-once='true' className='lg:w-[50%] lg:mt-14 flex flex-col gap-8 p-10 py-5 '>
                            <h1 id='our-vision' className='text-4xl font-bold text-center text-orange-500 '>Our Vision</h1>
                            <p className='text-lg font-md text-gray-400 lg:leading-9 text-justify'>
                                Envision a future where industries seamlessly synchronize with intelligent automation. We, at SRCPL, strive to be the driving force behind this transformation. By amalgamating precision engineering with cutting-edge technology, our vision is to empower industries to achieve unprecedented levels of productivity, sustainability, and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10'>

                <div className=' flex flex-row   lg:px-10  bg-cover   bg-blue-950 ' style={{
                    backgroundImage: ` url(${goalsbgImage})`


                    

                }}>
                    < div  className=' px-10  py-10 flex lg:flex-row flex-col lg:justify-between items-center lg:gap-28   ' >
                        <div  data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className='lg:w-[50%]'>
                            <img src={bgImage2} className='object-contain rounded-lg lg:h-[600px]' />

                        </div>
                        <div  data-aos='fade-right' data-aos-delay='300' data-aos-once='true' className='lg:w-[50%] text-white flex flex-col gap-7 lg:-mt-4 py-10'>
                            <div className='flex flex-col gap-3'>
                                {/* <h1 className='text-orange-500 text-md'>OUR PROCESS</h1> */}
                                <h1 id='our-goals' className='text-4xl text-orange-500 text-md  font-semibold'>Our Goals</h1>
                            </div>

                            <div className='flex flex-col gap-8'>

                                <div className='flex flex-col gap-2'>
                                    {/* <h2 className='text-orange-500 text-md '>Step 01</h2> */}
                                    <h1 className='text-2xl font-semibold '>1. Comprehensive Industrial</h1>
                                    <p className='text-md font-normal leading-7 text-justify text-gray-400'> Automation
                                        Embark on a journey with us as we deliver end-to-end automation solutions. From meticulously designed Shop Floor Control Panels to the intricacies of PLC, HMI, servo systems, SCADA, and the finesse of robotic applications - we leave no stone unturned.

                                    </p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    {/* <h2 className='text-orange-500 text-md '>Step 02</h2> */}
                                    <h1 className='text-2xl font-semibold '>2. Integration with Cloud Technologies
                                    </h1>
                                    <p className='text-md font-normal text-gray-400 text-justify leading-7'>Witness the convergence of physical and digital realms with our cloud integration solutions. Real-time monitoring, predictive analytics, and data-driven decision-making become the backbone of your operations, linking the factory floor to the cloud seamlessly.

                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {/* <h2 className='text-orange-500 text-md '>Step 03</h2> */}
                                    <h1 className='text-2xl font-semibold '>3. Diversified Industry Solutions</h1>
                                    <p className='text-md font-normal text-gray-400 text-justify leading-7'>Step into the realm of tailored automation solutions for diverse sectors. Manufacturing, energy, pharmaceuticals, and beyond - our expertise extends to cater to the unique demands of each industry, ensuring optimal performance and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

            </div>
            {/* <div className='bg-[#081528]'>
                    
                </div> */}




            < div >
                <div className='flex lg:flex-row flex-col lg:justify-between items-center lg:mx-14 lg:my-20 lg:px-14 px-10 py-10  gap-14 '>

                    <div  data-aos='fade-leftt' data-aos-delay='300' data-aos-once='true'className=' lg:w-[50%] '>
                        {/* <h1 className='text-orange-500 text-md font-semibold'>OUR SERVICES</h1> */}
                        <h1 id='our-presence-in-the-market' className='text-4xl font-bold text-orange-500 '>Our Presence in the market</h1>
                    </div>

                    <div  data-aos='fade-right' data-aos-delay='300' data-aos-once='true'className='lg:w-[50%]'>
                        <p className='text-lg leading-9 text-justify text-gray-400 '>
                            Steeped in a legacy of excellence, SRCPL has become synonymous with industrial automation prowess. Our solutions have catalyzed transformations across industries, reducing downtime, enhancing operational performance, and fostering growth. Explore our portfolio to witness the real-world impact of our automation expertise.

                        </p>
                    </div>
                </div>
                <div>
                </div>
            </div >



            <div data-aos='fade-down' data-aos-delay='300' data-aos-once='true' className='flex flex-col justify-center items-center '>

                <div className='grid lg:grid-cols-3 grid-cols-1  lg:justify-between items-center  bg-[#f8f8f8] gap-8 p-10  lg:mx-4'>
                    <CardWithImage img={cardImage1} header={'INDUSTRY SOFTWARE'} subHeader={'Edgifying Machine Learning For Industria Thel IoT (IIot)'} para={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
                    <CardWithImage img={cardImage1} header={'MANUFACTURING'} subHeader={'FogHorn Adds Drag And Drop Analytic Authoring For IOT'} para={'Web development is the work involved in developing a website for the Internet or an intranet.'} />
                    <CardWithImage img={cardImage1} header={'MACHINE LEARNING'} subHeader={'FogHorn AchievesAWS Industrial Software Competency'} para={'Web development is the work involved in developing a website for the Internet or an intranet.'} />

                </div>
                {/* <div className='my-10'>
                    <button className=' px-10 py-3 text-md rounded-md mx-6 text-white font-semibold bg-orange-500  hover:bg-blue-950 hover:text-orange-500 '>View All</button>
                </div> */}


            </div>

            <div className='py-14'>
                <Slider />
            </div>

            {/* <div className='lg:my-24 lg:py-14 py-10 bg-orange-200'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-md font-semibold text-orange-500 '>ARTICLES</h1>
                    <h1 className='text-4xl font-semibold '>Recent Blogs</h1>
                </div>
                <div className=''>
                    <MultipleSlider color='' />
                </div>
            </div> */}
        </div >

    )
}

export default Home