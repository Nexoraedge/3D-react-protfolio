import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HackingTable from '../components/HackingTable'
import CanvasLoder from '../components/CanvasLoder'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../context'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Herocamera from '../components/Herocamera'
import Button from '../components/Button'
import GlobalLoader from '../components/GlobalLoader'
import CanvasErrorBoundary from '../components/CanvasErrorBoundary'

const Hero = () => {
  // const  x =  useControls('HackingTable',{
  //   positionX:{
  //     value:0.2,
  //     min:-10,
  //     max:10,
  //   },
  //   positionY:{
  //     value:0.2,
  //     min:-10,
  //     max:10,
  //   },
  //   positionZ:{
  //     value:0.2,
  //     min:-10,
  //     max:10,
  //   },

  //   rotationX:{
  //     value:0.02,
  //     min:-10,
  //     max:10,
  //   },
  //   rotationY:{
  //     value:0.02,
  //     min:-10,
  //     max:10,
  //   },
  //   rotationZ:{
  //     value:0.02,
  //     min:-10,
  //     max:10,
  //   },
  //   scale:{
  //     value:0.025,
  //     min:-10,
  //     max:10,
  //   },
  // })
  const isSmall = useMediaQuery({ query: '(max-width: 410px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const size = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section id='home' className='min-h-screen flex banner flex-col relative '>
      <GlobalLoader />

      <div className="w-full mx-auto flex flex-col sm:mt-21 mt-10 sm:px-10 px-5 gap-3">

        <p className='sm:text-4xl text-2xl font-medium text-center font-berlin'>Hi! I am Hardik Jain <span className='waving-hand'>👋🏻</span>
        </p>
        <p className='text-center xl:text-6xl md:text-4xl sm:text-3xl text-3xl font-berlin font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>Building AI-Powered Web Experiences</p>
      </div>
      <div className='w-full h-full absolute inset-0 '>
        {/* <Leva /> */}
        <CanvasErrorBoundary fallback={<div className='w-full h-full flex items-center justify-center text-sky-300'>3D scene failed to load.</div>}>
          <Canvas className='w-full flex   h-full'>
            <Suspense fallback={<CanvasLoder />} >
              <perspectiveCamera makeDefault position={[0, 0, 30]} />
              <Herocamera isMobile={isMobile} isSmall={isSmall}>
                <HackingTable
                  //  scale={0.020}
                  // position={[0,0,0]}
                  // rotation={[0.4,179.1,0]}
                  position={size.deskPosition}
                  rotation={[.2, -3.098, 0.005]}
                  scale={size.deskScale}
                />
              </Herocamera>

              <group >
                {/* <Target position={size.targetPosition} /> */}
                {/* <ReactLogo position={size.reactLogoPosition} /> */}
                {/* <Cube positoin={size.cubePosition} /> */}
                {/* <Ring position={size.ringPosition} /> */}

              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>

      </div>
      <div className='absolute bottom-7 left-0  right-0 w-full z-10 sm:px-10 px-5'>
        <a href="#contact" className='w-fit'>
          <Button isBeam e="Let's work together" container ClassName="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
      <canvas id="dotsCanvas" className="banner"></canvas>
    </section>
  )
}

export default Hero
