import React from 'react'
import { footerlink } from '../context'

const Footer = () => {
    return (
        <section className='sm:px-10 px-5 py-20 border-t border-white/5 bg-black flex flex-col items-center justify-center gap-10 relative overflow-hidden'>
            
            {/* Elegant glowing top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-lg h-24 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="flex gap-6 items-center z-10">
                {footerlink.map((index) => (
                    <a key={index.id} href={index.href} target="_blank" rel="noopener noreferrer" className="group">
                        <div className='w-14 h-14 rounded-full flex justify-center items-center bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-orange-500/50 group-hover:bg-white/10 group-hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/50'>
                            <img src={index.img} alt={index.name} className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                    </a>
                ))}
            </div>
            
            <p className="text-neutral-500 text-sm text-center font-light tracking-widest uppercase z-10">
               ©️ 2026 Hardik. All rights reserved.
            </p>
        </section>
    )
}

export default Footer