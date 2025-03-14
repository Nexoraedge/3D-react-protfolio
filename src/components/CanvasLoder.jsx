import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoder = () => {
    const { progress } = useProgress()
    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
           <span className='canvas-Loder'>
            <p style={{fontSize:14,color:'white',fontWeight:800, marginTop:40}}>
                {progress !== 0 ?`${progress.toFixed(2)}%` :'Loading...'}
            </p>
           </span>
        </Html>
    )
}

export default CanvasLoder
