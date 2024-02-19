import React, { useEffect } from 'react'
import ProductsCard from '../components/ProductsCard';
import image1 from '../assets/controller.jpg'
import image2 from '../assets/drive.jpg'
import image3 from '../assets/visualization.jpg'
import image4 from '../assets/industrial-robot.jpg'
import image5 from '../assets/power-monitoring-robots.jpg'
import image6 from '../assets/industrial-communication.jpg'
import image7 from '../assets/industry-4.0.jpg'
import image8 from '../assets/control-panels.jpg'
import image9 from '../assets/industrial-wireless.jpg'
import image10 from '../assets/training-kit.jpg'
import corImage from '../assets/offer-shape.png'
import BgImag from '../assets/Vizion-manu-shapvedio.png'
import { dataP } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Products = ({ }) => {

    useEffect(() => {

        Aos.init({ duration: 1000 })


    })





    return (
        <div className=' bg-[#f8f8f8] pb-20'>

            <div className=' flex flex-row   relative justify-center  py-32 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
                backgroundImage: `linear-gradient(rgba(7, 9, 65, 1), rgba(7, 9, 65  , 0.8)), url(${BgImag})`

            }}>

                <h1 className='text-4xl text-center text-white hover:text-orange-500 py-14  font-semibold'>Products</h1>

            </div>
            <div data-aos='fade-down' data-aos-delay='300' data-aos-once='true' className='grid lg:grid-cols-3 grid-cols-1  gap-8 px-14 py-20'>

                <ProductsCard handleProductsData={dataP} no={0} img={image1} heading='Mitsubishi Products' para='MELSEC Series controller lineup available to meet customer requirements, from small scale and stand-alone to medium- and large scale systems' button='Read More +' />
                <ProductsCard handleProductsData={dataP} no={1} img={image2} heading=' Phoenix Contact' para='In heavy industrial use, our frequency inverters and Servo Systems prove their high levels of cost-effectiveness, reliability, functionality, and flexibility.' button='Read More +' />
                <ProductsCard handleProductsData={dataP} no={2} img={image3} heading='Control Panels' para='GOT HMI’s and ICONICS Suite™ offers integrated monitoring and control solutions for applications.  Beneficial and user-friendly solutions to the users' button='Read More +' />

                <ProductsCard handleProductsData={dataP} no={3} img={image4} heading='Turnkey Solutions' para='Robots work with people and work next to people in busy workplaces. with the Mitsubishi Electric MELFA Industrial robots, Make it easier, easy to use, and more flexible.' button='Read More +' />
                <ProductsCard handleProductsData={dataP} no={4} img={image5} heading='Services' para='With Mitsubishi Power management meters features with high performance and reliability to meet diversified needs by visualizing, solution with Energy Saving Supporting Devices.' button='Read More +' />


            </div>









        </div>
    )
}

export default Products