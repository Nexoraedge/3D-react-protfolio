import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';

const Herocamera = ({ children, isMobile , isSmall }) => {
    const groupRef = useRef();
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 6], 0.25, delta)
        if (!isMobile) {
            return easing.dampE(groupRef.current.rotation, [state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta)
        }
    })
    return (
        <group ref={groupRef} scale={isMobile?1.57: isSmall?1 :1.45}>
            {children}
        </group>
    )
}

export default Herocamera
