import React, { Suspense, useState } from 'react'
import { myProjects } from '../context'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Center } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoder'
import Laptop from '../components/Laptop';

const Projects = () => {
    const projectCount = myProjects.length;
    const [seletedProjectIndex, setSeletedProjectIndex] = useState(0)
    const CurrentProject = myProjects[seletedProjectIndex];
    const HandleNavigation = (direction) => {
        setSeletedProjectIndex((prevIndex) => {
            if (direction === 'prevIndex') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }

        }
        )
    }

    return (
        <section id='projects' className='sm:px-10 px-5 my-10'>
            <p className='text-3xl bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text  font-semibold mb-2 text-white font-berlin'>
                My Work
            </p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-neutral-700 '>
                    <div className="absolute top-0 right-0">
                        <img src={CurrentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl rounded-lg w-fit' style={CurrentProject.logoStyle}>
                        <img src={CurrentProject.logo} alt="logo" className='w-10 h-10  shadow-sm' />
                    </div>
                    <div className="flex flex-col gap-5 my-5 text-neutral-200">
                        <p className=' text-2xl font-sem animatedText' >{CurrentProject.title}</p>
                        <p className='animatedText'>{CurrentProject.desc}</p>
                        <p className='animatedText'>{CurrentProject.subdesc}</p>

                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5 ">
                        <div className="flex items-center gap-3">
                            {CurrentProject.tags.map((tag, index) => (
                                <div key={index} className='w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a href={CurrentProject.href}
                            target={'_blank'}

                            className='flex items-center gap-2 text-neutral-200 cursor-pointer'>
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className='w-4.6 h-3.5' />

                        </a>
                    </div>
                    <div className='flex justify-between mt-7 items-center'>
                        <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient' onClick={() => {
                            HandleNavigation('previous')
                        }
                        }>
                            <img src="/assets/left-arrow.png" alt="arrow left" className='h-4 w-4' />
                        </button>
                        <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient' onClick={() => {
                            HandleNavigation('next')
                        }
                        }>
                            <img src="/assets/right-arrow.png" alt="arrow right" className='h-4 w-4' />
                        </button>

                    </div>
                </div>
                <div className="border-neutral-700/50 border  bg-neutral-950/20 rounded-lg h-96 md:h-full ">
                    <Canvas camera={{ position: [2, 1, 5], fov: 45 }}>
                        <ambientLight intensity={1} />
        
                        {/* <OrbitControls makeDefault enablePan={false} /> */}
                        <directionalLight position={[20, 50, 50]} />
                        <Center >
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={0.02} position={[-1, -0.8, -2.5]} rotation={[-1.5, 0.02, 0.35]}>
                                <OrbitControls makeDefault enablePan={false}
                                  minDistance={3.5}   // how close you can zoom
                                  maxDistance={5}     
                                
                                enableZoom enableRotate={true} dampingFactor={0.02} />
                                    <Laptop media={CurrentProject.img} zoom={2} rotation={0} />
                                </group>
                            </Suspense>
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects
