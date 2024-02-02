import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import folioImage from '../assets/Vizion-spire-360x400.jpg';



const Portfolio = ({ handlePortfolioData }) => {
    return (
        <div className=' bg-[#f8f8f8] py-20 '>
            <div>
                <h1 className='text-4xl text-orange-500 py-14 bg-gray-200 text-center font-semibold'>Our Portfolio</h1>
            </div>
            <div className=''>

                <div className='flex flex-col justify-center lg:mx-14 lg:px-0 px-10 my-14 items-center '>

                    <p className='text-lg text-justify text-gray-400  leading-9 '>
                        Welcome to SRCPL, your trusted partner in industrial automation. Our diverse product portfolio features cutting-edge solutions from renowned brands to elevate your manufacturing processes. Explore the essence of innovation through our key product categories:
                    </p>
                </div>

                <div className='flex lg:flex-row flex-col justify-between items-center lg:mx-14 px-10 py-10 lg:-mt-32 lg:gap-0 gap-5 '>
                    <PortfolioCard handlePortfolioData={handlePortfolioData} no={0} img={folioImage} text={'Mitsubishi Products'} />
                    <PortfolioCard handlePortfolioData={handlePortfolioData} no={1} img={folioImage} text={'Phoenix Products'} />
                    <PortfolioCard handlePortfolioData={handlePortfolioData} no={2} img={folioImage} text={'Control Panels'} />
                    <PortfolioCard handlePortfolioData={handlePortfolioData} no={3} img={folioImage} text={'Turnkey Solutions'} />
                    <PortfolioCard handlePortfolioData={handlePortfolioData} no={4} img={folioImage} text={'Services'} />
                </div>

            </div>






        </div>
    )
}

export default Portfolio