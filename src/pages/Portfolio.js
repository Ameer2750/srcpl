import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import folioImage from '../assets/Vizion-spire-360x400.jpg'

const Portfolio = () => {
    return (
        <div className='mx-14 my-14 '>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-4xl text-orange-500 font-bold'>Our Product Portfolio</h1>
                <p className='text-lg text-justify text-gray-400  leading-9 '>
                    Welcome to SRCPL, your trusted partner in industrial automation. Our diverse product portfolio features cutting-edge solutions from renowned brands to elevate your manufacturing processes. Explore the essence of innovation through our key product categories:
                </p>
            </div>

            <div className='flex flex-row justify-between items-center -mt-32 '>
                <PortfolioCard img={folioImage} text={'Mitsubishi Products'} />
                <PortfolioCard img={folioImage} text={'Phoenix Contact Products'} />
                <PortfolioCard img={folioImage} text={'Control Panels'} />
                <PortfolioCard img={folioImage} text={'Complete Turnkey Solutions'} />
                <PortfolioCard img={folioImage} text={'Services'} />
            </div>






        </div>
    )
}

export default Portfolio