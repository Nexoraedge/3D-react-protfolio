import { span } from 'motion/react-client'
import React from 'react'

const Button = ({e , isBeam=false, containerClass}) => {
  return (
    <button className={`flex gap-4 items-center justify-center cursor-pointer tracking-wider p-3 rounded-md bg-neutral-400/15 font-berlin  text-lg transition-all active:scale-95 text-white mx-auto ${containerClass}`}>
        {isBeam && (
            <span className='relative flex  h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
                <span className=' relative  inline-flex rounded-full h-3 w-3 bg-green-500' />
            </span>
        )}
    {e}
  </button>
  )
}

export default Button
