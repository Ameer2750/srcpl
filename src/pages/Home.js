import React from 'react'
import Card from '../components/Card'
import cardImage1 from '../assets/card1.jpg'
import cardImg1 from '../assets/Vizion-spire-360x400.jpg'
import bgImage from '../assets/Vizion-manu-02.png'
import bgImage2 from '../assets/Rectangle-1986-1.png'
import CardWithImage from '../components/CardWithImage'
import SimpleSlider from '../components/slider/SimpleSlider'
import Slider from '../components/slider/Slider'
import MultipleSlider from '../components/slider/MultipleSlider'


const Home = () => {

    return (

        <div className='bg-[#f8f8f8] py-14'>
            <div className='flex flex-col mx-14'>
                <div className='flex flex-row justify-between  mx-4 '>
                    <div className='flex flex-col  gap-6  '>
                        <h2 id='whats-new' className='text-4xl font-bold text-orange-500 '>What's New</h2>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <p className='text-lg text-gray-400 '>Discover the latest breakthroughs in industrial automation solutions at SRCPL. We are thrilled to unveil recent advancements that underscore our commitment to staying at the forefront of technology. From enhanced Shop Floor Control Panels to innovative Cloud Integrations, our updates are designed to elevate industries to new heights.
                                Our Mission
                            </p>
                            <p className='text-lg text-gray-400 '>
                                At the heart of [SRCPL]'s mission is a dedication to crafting bespoke factory automation solutions. From the intricacies of control panels to the expansiveness of cloud-based systems, our mission is to redefine industrial processes, making them more efficient, intelligent, and adaptive.

                            </p>
                        </div>
                        <div className='flex flex-col  gap-8'>
                            <h1 id='our-mission' className='text-4xl font-bold text-orange-500 '>Our Mission</h1>
                            <p className='text-lg text-gray-400 '>
                                At the heart of [SRCPL]'s mission is a dedication to crafting bespoke factory automation solutions. From the intricacies of control panels to the expansiveness of cloud-based systems, our mission is to redefine industrial processes, making them more efficient, intelligent, and adaptive.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row justify-between -mt-20 '>
                    <Card img={cardImg1} text={'Our Mission'} />
                    <Card img={cardImg1} text={'Our Vision'} />
                    <Card img={cardImg1} text={'Our Goals'} />
                    <Card img={cardImg1} text={'Our Presence in the Market'} />
                </div>
                <div className='text-center -mt-24'>
                    <button className=' px-12 py-3 text-md rounded-md mx-6 text-white font-semibold bg-orange-500 hover:bg-gray-400 '>View All</button>
                </div>
            </div>

            <div className='bg-[#f8f8f8]'>
                <div className='mx-14 my-14 py-10'>
                    <div className='flex flex-row '>
                        <div className='w-[50%]'>
                            <img src={bgImage} className='h-[500px]' />
                        </div>
                        <div className='w-[50%] mt-14 flex flex-col gap-8 p-10 py-5 gap-5'>
                            <h1  id='our-vision' className='text-4xl font-bold text-center text-orange-500 '>Our Vision</h1>
                            <p className='text-lg font-md text-gray-400 leading-9 text-justify'>
                                Envision a future where industries seamlessly synchronize with intelligent automation. We, at SRCPL, strive to be the driving force behind this transformation. By amalgamating precision engineering with cutting-edge technology, our vision is to empower industries to achieve unprecedented levels of productivity, sustainability, and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#081528]'>
                <div className='mx-14 my-32 py-32 flex flex-row justify-between items-center gap-28   '>
                    <div className='w-[50%]'>
                        <img src={bgImage2} className='rounded-lg h-[600px]' />

                    </div>
                    <div className='w-[50%] text-white flex flex-col gap-7 -mt-4'>
                        <div className='flex flex-col gap-3'>
                            {/* <h1 className='text-orange-500 text-md'>OUR PROCESS</h1> */}
                            <h1 id='our-goals' className='text-4xl text-orange-500 text-md font-semibold'>Our Goals</h1>
                        </div>

                        <div className='flex flex-col gap-8'>

                            <div className='flex flex-col gap-2'>
                                {/* <h2 className='text-orange-500 text-md '>Step 01</h2> */}
                                <h1 className='text-2xl font-semibold '>1. Comprehensive Industrial</h1>
                                <p className='text-md font-normal leading-7 text-gray-400'> Automation
                                    Embark on a journey with us as we deliver end-to-end automation solutions. From meticulously designed Shop Floor Control Panels to the intricacies of PLC, HMI, servo systems, SCADA, and the finesse of robotic applications - we leave no stone unturned.

                                </p>
                            </div>


                            <div className='flex flex-col gap-2'>
                                {/* <h2 className='text-orange-500 text-md '>Step 02</h2> */}
                                <h1 className='text-2xl font-semibold '>2. Integration with Cloud Technologies
                                </h1>
                                <p className='text-md font-normal text-gray-400 leading-7'>Witness the convergence of physical and digital realms with our cloud integration solutions. Real-time monitoring, predictive analytics, and data-driven decision-making become the backbone of your operations, linking the factory floor to the cloud seamlessly.

                                </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {/* <h2 className='text-orange-500 text-md '>Step 03</h2> */}
                                <h1 className='text-2xl font-semibold '>3. Diversified Industry Solutions</h1>
                                <p className='text-md font-normal text-gray-400 leading-7'>Step into the realm of tailored automation solutions for diverse sectors. Manufacturing, energy, pharmaceuticals, and beyond - our expertise extends to cater to the unique demands of each industry, ensuring optimal performance and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex flex-row justify-between items-center mx-14 my-20 px-14  gap-14 '>

                    <div className=' w-[50%] '>
                        {/* <h1 className='text-orange-500 text-md font-semibold'>OUR SERVICES</h1> */}
                        <h1 id='our-presence-in-the-market' className='text-4xl font-bold text-orange-500 '>Our Presence in the market</h1>
                    </div>

                    <div className='w-[50%]'>
                        <p className='text-lg leading-9 text-justify text-gray-400 '>
                            Steeped in a legacy of excellence, SRCPL has become synonymous with industrial automation prowess. Our solutions have catalyzed transformations across industries, reducing downtime, enhancing operational performance, and fostering growth. Explore our portfolio to witness the real-world impact of our automation expertise.

                        </p>
                    </div>
                </div>
                <div>
                </div>
            </div>



            <div className='flex flex-col justify-center items-center '>

                <div className='flex flex-row justify-between items-center bg-[#f8f8f8] gap-8 p-10  mx-4'>
                    <CardWithImage img={cardImage1} header={'INDUSTRY SOFTWARE'} subHeader={'Edgifying Machine Learning For Industria Thel IoT (IIot)'} para={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
                    <CardWithImage img={cardImage1} header={'MANUFACTURING'} subHeader={'FogHorn Adds Drag And Drop Analytic Authoring For IOT'} para={'Web development is the work involved in developing a website for the Internet or an intranet.'} />
                    <CardWithImage img={cardImage1} header={'MACHINE LEARNING'} subHeader={'FogHorn AchievesAWS Industrial Software Competency'} para={'Web development is the work involved in developing a website for the Internet or an intranet.'} />

                </div>
                <div className='my-10'>
                    <button className=' px-10 py-3 text-md rounded-md mx-6 text-white font-semibold bg-orange-500 hover:bg-gray-400 '>View All</button>
                </div>


            </div>

            <div className='py-5'>
                <Slider />
            </div>

            <div className='my-24 py-14 bg-orange-200'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-md font-semibold text-orange-500 '>ARTICLES</h1>
                    <h1 className='text-4xl font-semibold '>Recent Blogs</h1>
                </div>
                <div className=''>
                    <MultipleSlider  color='' />
                </div>
            </div>
        </div>

    )
}

export default Home