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


                <div className='max-w-xl relative z-10 sm:px-10 px-5 mt-12 lg:mt-25'>

                    <h3 className='sm:text-4xl text-3xl font-semibold text-gray_gradient'>
                        Let's Talk
                    </h3>
                    <p className='text-lg text text-neutral-100 mt-3 '>
                        Whether You are Looking to build a new website  improve  your existing platform , or bring a unique project to life , I'm here to Help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7' >
                        <label htmlFor="name" className='space-y-3'>
                            <span className=' text-lg text-neutral-100'>Full Name</span>
                            <input type="text" name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='w-full bg-neutral-800/50 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500/80 text-lg text-neutral-100/90 shadow-neutral-900/80 shadow-2xl focus:outline-none'
                                placeholder='Something_Name' />
                        </label>


                        <label htmlFor="email" className='space-y-3'>
                            <span className=' text-lg text-neutral-100'>Email</span>
                            <input type="email" name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='w-full bg-neutral-800/50 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500/80 text-lg text-neutral-100/90 shadow-neutral-900/80 shadow-2xl focus:outline-none'
                                placeholder='Somthing123@email.com' />
                        </label>



                        <label htmlFor="message" className='space-y-3'>
                            <span className=' text-lg text-neutral-100'>Your Message</span>
                            <textarea
                                name="message"

                                value={form.message}
                                required
                                rows={5}
                                onChange={handleChange}
                                className='w-full bg-neutral-800/50 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500/80 text-lg text-neutral-100/90 shadow-neutral-900/80 shadow-2xl focus:outline-none'
                                placeholder='Hi  , I am intreseted in....'

                            ></textarea>
                        </label>

                        <button className='bg-neutral-800 px-5 py-2 min-h-12 rounded-lg  cursor-pointer shadow-neutral-300/20 shadow-lg flex justify-center items-center text-lg text-white gap-3'
                            type='submit'
                            disabled={loading}

                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='w-2.5 h-2.5 object-contain invert brightness-0' />
                        </button>
                    </form>

                </div>

            </div>

        </section >
    )
}

export default Contact