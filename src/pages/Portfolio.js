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

                <div className='flex flex-col justify-center mx-14 my-14 items-center '>

                    <p className='text-lg text-justify text-gray-400  leading-9 '>
                        Welcome to SRCPL, your trusted partner in industrial automation. Our diverse product portfolio features cutting-edge solutions from renowned brands to elevate your manufacturing processes. Explore the essence of innovation through our key product categories:
                    </p>
                </div>

                <div className='flex flex-row justify-between items-center mx-14 -mt-32 '>
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