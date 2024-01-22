import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import folioImage from '../assets/Vizion-spire-360x400.jpg'

const Portfolio = () => {
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
                    <PortfolioCard img={folioImage} text={'Mitsubishi Products'} />
                    <PortfolioCard img={folioImage} text={'Phoenix Contact Products'} />
                    <PortfolioCard img={folioImage} text={'Control Panels'} />
                    <PortfolioCard img={folioImage} text={'Complete Turnkey Solutions'} />
                    <PortfolioCard img={folioImage} text={'Services'} />
                </div>

            </div>






        </div>
    )
}

export default Portfolio