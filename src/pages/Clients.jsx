import React from 'react'
import { clientReviews } from '../context/index'
import { array, div } from 'three/tsl'

const Clients = () => {
    return (
        <section className='sm:px-10 px-5 my-20'>
            <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-berlin">Cheer from my clients</h3>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-12'>
              {clientReviews.map((index) => (  
                <div key={index.id} className='rounded-lg md:p-10 p-5 col-span-1 bg-neutral-800/40 bg-opacity-50'>
                    <div>
                        <p className='text-white font-light '>
                            {index.review}
                        </p>
                        <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7'>
                            <div className="flex gap-3">
                                <img src={index.img} className='w-12 h-12 rounded-full' alt="logo" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white">{index.name}</p>
                                    <p className='test-white/90 md:texxt-base
                                    text-sm font-regular'>{index.position}</p>
                                </div>
                            </div>
                            <div className="flex self-end  items-center gap-2">
                                {Array.from({length:5}).map((_,index)=>(
                                    <img key={index} src="/assets/star.png" 
                                    className='w-5 h-5'
                                    alt="stars" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                   ))}
            </div>
        </section>
    )
}

export default Clients