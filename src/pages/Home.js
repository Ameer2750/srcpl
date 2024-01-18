import React from 'react'
import Card from '../components/Card'
import cardImg1 from '../assets/Vizion-spire-360x400.jpg'
import bgImage from '../assets/Vizion-manu-02.png'

const Home = () => {

    return (

        <div className='bg-[#f8f8f8]'>
            <div className='flex flex-row justify-between mx-4 '>
                <div className='flex flex-col gap-2 p-2'>
                    <h2 className='text-lg font-semibold text-orange-500'>Our Portfolio</h2>
                    <h1 className='text-5xl font-semibold'>Enable Smarter Factories With</h1>
                    <h1 className='text-5xl font-semibold'>  Artificial Intelligence
                    </h1>

                </div>
                <div className='mt-10 '>
                    <button className=' px-10 py-3 text-md rounded-md mx-6 text-white font-semibold bg-orange-500 hover:bg-gray-400 '>View All</button>
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <Card img={cardImg1} text={'Mitsubishi Electric'} />
                <Card img={cardImg1} text={'Pheonix Contact'} />
                <Card img={cardImg1} text={'Control Panel '} />



            </div>

            <div className='mx-4 flex flex-row '>
                <div className='w-[50%]'>
                    <img src={bgImage}/>
                </div>
                <div className='w-[50%] flex flex-col gap-5 p-10 py-5'>
                    <h1 className='text-lg font-semibold text-orange-500'>FEATURED INDUSTRY SOLUTION</h1>
                    <h1 className='text-5xl font-semibold '>Enable Smarter Factories With Artificial Intelligence</h1>

                    <p className='text-md font-semibold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>

                    


                </div>



            </div>
        </div>

    )
}

export default Home