import React, { Suspense, useState } from 'react'
import { workExperiences } from '../context'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoder from '../components/CanvasLoder'
import Developer from '../components/Developer'

const Experience = () => {
    const [animationName, setanimationName] = useState('idle')
    return (
        <section className='sm:px-10 px-5 my-20'>
            <div className="w-full text-neutral-200">
                <h3 className='sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] to-[#D5D8EA] bg-clip-text text-transparent'>
                    My Work Experience
                </h3>
                <div className="grid lg:grid-cols-3 grid-cols-1  mt-12">
                    <div className='col-span-1 rounded-lg 
                    h-100 sm:h-130 md:h-150 lg:h-full
                    bg-neutral-600/40 border 
                    border-neutral-600/50'>
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                            <OrbitControls maxPolarAngle={Math.PI / 3} enableZoom={false} />
                            <Suspense fallback={<CanvasLoder />}>
                                <Developer position={[-0.05, -2.75, 0.45]} scale={2.5} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="col-span-2 rounded-lg
                   mt-7 lg:ml-7 lg:mt-0
                    bg-neutral-800/40 border border-neutral-600/50">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, duration, title, animation, icon }, index) => (
                                <div key={id} className='grid grid-cols-[auto_1fr] items-start gap-5 cursor-pointer 
                                hover:bg-zinc-800

                                 transition-all ease-in-out duration-500 rounded-lg sm:px-5 px-2.5 group'
                                    onClick={() => {
                                        setanimationName(animation.toLowerCase());

                                    }
                                    }
                                    onPointerOver={
                                        () => {
                                            setanimationName(animation.toLowerCase());
                                        }

                                    }

                                    onPointerOut={
                                        () => {
                                            setanimationName('idle');
                                        }

                                    }

                                >
                                    <div className="flex flex-col h-full justify-start
                                    items-center py-2">
                                        <div className='rounded-3xl w-16 h-16 p-2 bg-neutral-700/60
                                        flex justify-center
                                        items-center
                                        group-hover:bg-neutral-900
                                        transition-all
                                        ease-in-out
                                        duration-500
                                        '>
                                            <img src={icon} alt="logo" className='group-hover:scale-150
                                            transition-all
                                            ease-in-out
                                            duration-600
                                            ' />
                                        </div>
                                        <div className='flex-1 w-0.5 mt-4 h-full bg-neutral-900/70 group-hover:bg-neutral-100/50 group-last:hidden' />
                                    </div>
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className='font-bold text-neutral-400/80
                                        group-hover:text-white'>
                                            {name}
                                        </p>
                                        <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                        <p className='group-hover:text-white transition 
                                        text-neutral-400 ease-in-out duration-50'>{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience