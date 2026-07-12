import React, { useRef, useState } from 'react'
import { send } from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await send(
                'service_k19zyka',
                'template_2u245va',
                {
                    name: form.name,
                    message: form.message,
                    email: form.email,
                },
                'mLXcbRuXIvyEVMZnN'
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
            } else {
                console.error('Failed to send message:', response);
                alert('Failed to send message. Please try again later.');
            }
            setForm({
                name:'',
                email:'',
                message:''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Something went wrong! Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id='contact' className='sm:px-10 px-5 my-15' >
            <h3 className='sm:text-4xl  text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-berlin'>
                Contact Me
            </h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">


                <div className='w-full max-w-4xl relative z-10 sm:px-10 px-5 mt-12 lg:mt-20 mx-auto'>
                    
                    {/* Decorative glowing background blobs (Subtle, warm tones) */}
                    <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 -right-20 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

                    <div className='flex flex-col items-center justify-center p-12 sm:p-20 bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden'>
                        
                        {/* Abstract gradient mesh for the card */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-800/30 via-transparent to-transparent opacity-80"></div>
                        
                        <img src="/assets/terminal.png" alt="terminal background" className="absolute -top-32 -right-32 w-96 h-96 opacity-[0.02] rotate-12 pointer-events-none" />

                        <h4 className='text-4xl md:text-6xl font-extrabold text-white mb-6 z-10 text-center tracking-tight leading-tight'>
                            Let's Build Something <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-[#e2725b] drop-shadow-sm">Extraordinary.</span>
                        </h4>
                        
                        <p className='text-lg md:text-xl text-neutral-400 text-center mb-12 max-w-2xl z-10 font-light leading-relaxed'>
                            Whether you're planning a new idea or refining an old one—I’m here to collaborate, innovate, and bring your vision to life. Book a consultation or explore sponsorship opportunities.
                        </p>
                        
                        <a 
                            href="https://dhonidev-ai.vercel.app/consult" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='relative z-10 group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]'
                        >
                            <span className='relative text-lg font-bold tracking-wide'>Work With Me</span>
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='relative w-4 h-4 object-contain transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </a>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Contact