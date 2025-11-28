import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ReactLogo = (props) => {
  const { scene } = useGLTF('/models/react.glb')
  useGSAP(() => {

  }
  )
  return (
    <Float floatIntensity={1} dispose={null}>
      <primitive {...props} object={scene} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.009} />
    </Float>
  )
}

useGLTF.preload('/models/react.glb');
export default ReactLogo;
