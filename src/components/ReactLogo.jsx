
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ReactLogo =(props)=> {
  const { nodes, materials } = useGLTF('/models/react.glb')
  useGSAP(() => {
    
  }
  )
  return (
    <Float floatIntensity={1} dispose={null}>
      <group {...props}  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group  rotation={[Math.PI / 2, 0, 0]} scale={0.009}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[17.166, 17.166, 22.734]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Backdrop_Material001_0']}
            material={materials['Material.001']}
            position={[-17.091, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[17.854, 17.854, 22.734]}
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb');
export default ReactLogo;
