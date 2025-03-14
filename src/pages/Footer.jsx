import React from 'react'

const Footer = () => {
    return (
        <section className=' sm:px-10 px-5 pt-7 pb-3 border-t border-neutral-700 flex justify-between items-center flex-wrap gap-5'>
            <div className="text-neutral-300/50  flex gap-2">
                <p>Terms & Condition</p>
                <p></p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800/95 border border-neutral-700/90'>
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                </div>
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800/95 border border-neutral-700/90'>
                    <img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' />
                </div>
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800/95 border border-neutral-700/90'>
                    <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
                </div>
                <p className="text-neutral-300/50 text-center">
               ©️ 2025 Hardik All rights reserved
                </p>
            </div>
        </section>
    )
}

export default Footer