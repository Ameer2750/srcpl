import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import folioImage from '../assets/Vizion-spire-360x400.jpg';
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



const Products = ({handleProductsData }) => {
    return (
        <div className=' bg-[#f8f8f8] pb-20'>

            <div className=' flex flex-row relative justify-center  py-32 bg-cover bg-fixed   bg-[#1b2341] h-300px' style={{
                backgroundImage: `linear-gradient(rgba(7, 9, 65, 1), rgba(7, 9, 65  , 0.8)), url(${BgImag})`
            }}>
                <div className='' >
                    <h1 className='text-5xl text-center text-orange-500 py-14  font-semibold'>Products</h1>
                </div>
            </div>
            <div className='grid grid-cols-3  gap-8 px-14 py-10'>

                <ProductsCard handleProductsData={handleProductsData} no={0} img={image1} heading='Mitsubishi Products' para='MELSEC Series controller lineup available to meet customer requirements, from small scale and stand-alone to medium- and large scale systems' button='Read More +'  />
                <ProductsCard handleProductsData={handleProductsData} no={1} img={image2} heading=' Phoenix Contact' para='In heavy industrial use, our frequency inverters and Servo Systems prove their high levels of cost-effectiveness, reliability, functionality, and flexibility.' button='Read More +' />
                <ProductsCard handleProductsData={handleProductsData} no={2} img={image3} heading='Control Panels' para='GOT HMI’s and ICONICS Suite™ offers integrated monitoring and control solutions for applications.  Beneficial and user-friendly solutions to the users' button='Read More +' />

                <ProductsCard handleProductsData={handleProductsData} no={3} img={image4} heading='Turnkey Solutions' para='Robots work with people and work next to people in busy workplaces. with the Mitsubishi Electric MELFA Industrial robots, Make it easier, easy to use, and more flexible.' button='Read More +' />
                <ProductsCard handleProductsData={handleProductsData} no={4} img={image5} heading='Services' para='With Mitsubishi Power management meters features with high performance and reliability to meet diversified needs by visualizing, solution with Energy Saving Supporting Devices.' button='Read More +' />
                {/* <ProductsCard img={image6} heading='Industrial Communication' para='We provide a powerful means of data exchange, data controllability, and flexibility to connect various devices. With the use of proprietary digital communication networks in industries.' button='Read More +' />
          
                <ProductsCard img={image7} heading='Industrial 4.0' para='Industry 4.0 is revolutionizing the way companies manufacture, improve products. Manufacturers are integrating new technologies.' button='Read More +' />
                <ProductsCard img={image8} heading='Control Panels' para='Our organization is engaged in manufacturing and exporting of a wide assortment of Electrical Control Panel.' button='Read More +' />
                <ProductsCard img={image9} heading='Industrial Wireless' para='Wireless technologies for industrial communication products for industrial use with wireless technologies and wired Ethernet.' button='Read More +' />
     
                <ProductsCard img={image10} heading='Industrial Automation Training Kits' para='Automation is being followed by the digitization of production. An increase of productivity, efficiency, speed, and quality, resulting in higher competitiveness for future of industry.' button='Read More +' /> */}

            </div>














            {/* <div className='flex flex-col justify-center lg:mx-14 lg:px-0 px-10 my-14 items-center '>

                    <p className='text-lg text-justify text-gray-400  leading-9 '>
                        Welcome to SRCPL, your trusted partner in industrial automation. Our diverse product portfolio features cutting-edge solutions from renowned brands to elevate your manufacturing processes. Explore the essence of innovation through our key product categories:
                    </p>
                </div> */}
            {/* 
                <div className='flex lg:flex-row flex-col lg:justify-between items-center lg:mx-14 px-10 py-10 lg:-mt-32 lg:gap-0 gap-5 '>
                    <PortfolioCard handleProductsData={handleProductsData} no={0} img={folioImage} text={'Mitsubishi Products'} />
                    <PortfolioCard handleProductsData={handleProductsData} no={1} img={folioImage} text={'Phoenix Products'} />
                    <PortfolioCard handleProductsData={handleProductsData} no={2} img={folioImage} text={'Control Panels'} />
                    <PortfolioCard handleProductsData={handleProductsData} no={3} img={folioImage} text={'Turnkey Solutions'} />
                    <PortfolioCard handleProductsData={handleProductsData} no={4} img={folioImage} text={'Services'} />
                </div> */}







        </div>
    )
}

export default Products