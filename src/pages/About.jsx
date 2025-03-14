import { color } from 'motion/react'
import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { FrontSide } from 'three'
import Button from '../components/Button'

const About = () => {
    const [hasCoppied, setHasCoppied] = useState(false)
    const HandleCopy=() => {
      navigator.clipboard.writeText("hardikjain2030@gmail.com");
      setHasCoppied(true);
      setTimeout(() => {
        setHasCoppied(false)
      },2000
      )
    }
    
    return (
        <section id='about' className='sm:px-10 px-5 my-20 xl:mt-35'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className=" w-full h-full border border-neutral-700 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid1.png" alt="1st" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-berlin'>Hi, I am Hardik Jain</p>
                            <p className='text-[#afb0b6] text-base font-berlin tracking-wide'>I am a Ai powered Web Developer with a passion for building a scalable and efficient web Application. </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className=" w-full h-full border border-neutral-700 bg-black/20 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid2.png" alt="grid2" className='w-full sm:h-[276px] h-fit object-contain ' />
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-berlin'>DevDhoni-ai</p>
                            <p className='text-[#afb0b6] text-base font-berlin'>I Speacialize in Javascript with a focus on react and also good in Logo Designing</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className=" w-full h-full border border-neutral-700 bg-black/20 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpaccity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 32.12,
                                        lng: 77.12,
                                        text: "I Am Here!!",
                                        textColor: "#fff",
                                        size: 350,
                                        FrontSide,
                                        fontSize: 1.2,
                                        color: "#fff",
                                    }
                                ]}
                            />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-berlin'>I work remotely across most timezones</p>
                            <p className='text-[#afb0b6] text-base font-berlin'>I am Based in India and work with clients accros the globe</p>
                            <Button e="Contact Me" isBeam containerClass="w-full  mt-10 " />
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3 '>
                    <div className='w-full h-full border border-neutral-700 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                        <img src="/assets/grid3.png" alt="grid3" className='w-full h-fit object-contain sm:h-[276px]' />
                        <div>
                            <p className='text-xl font-semibold mb-2 text-white font-berlin'>My passion for coding</p>
                            <p className='text-[#afb0b6] text-base font-berlin'>I Love to code and build interseting projects with my skills and help of Ai.</p>
                        </div>
                    </div>
                </div>
                 <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='w-full h-full border border-neutral-700 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                        <img src="/assets/grid4.png" alt="grid4" className='w-full h-fit object-contain md:h-[126px] sm:h-[276px] sm:object-top' />
                        <div className='space-y-2'>
                            <p className='text-xl font-semibold mb-2 text-white font-berlin'>Contact Me</p>
                            <div className=' cursor-pointer flex justify-center items-center gap-2' onClick={HandleCopy}>
                                <img src={hasCoppied ? '/assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />
                                <p className='lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-white'>hardikjain2030@gmial.com</p>
                            </div>
                            
                        </div>
                    </div>
                 </div>

            </div>

        </section>
    )
}

export default About
