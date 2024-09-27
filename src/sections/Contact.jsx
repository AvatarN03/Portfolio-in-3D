import React, { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] =useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
//service_ngrottd
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_ngrottd','template_rwljsie', {
                from_name:form.name,
                to_name: "Naidu",
                from_email: form.email,
                to_email: "avengersyobaby051@gmail.com",
                message: form.message
            } )
            setLoading(false);
            setForm({
                name:'',
                email:'',
                message:''
            })
            alert('Message sent successfully!');
        } catch (error) {
            setLoading(false);
            alert('Failed to send message. Please try again later.');
            console.error(error);
            
        }

        
    }
    return (

        <section className="c-space my-20" id='contact'>
            <div className="relative flex items-center min-h-screen justify-center flex-col">
                <img src="/assets/terminal.png" alt="" className='absolute inset-0 min-h-screen' />
                <div className="contact-container">
                    <h3 className='head-text'> Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3 ">Whether you're looking to build a website, improve your existing platform, or bring a unique project to life, I'am here to help.</p>
                    <form action="" ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-7 mt-12' >
                        <label className='space-y-3 ' htmlFor="" >
                            <span className="field-label">Full Name:</span>
                            <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe' />
                        </label>
                        <label className='space-y-3 ' htmlFor="" >
                            <span className="field-label">Email:</span>
                            <input type="email" name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='Johndoe@gmail.com' />
                        </label>
                        <label className='space-y-3 ' htmlFor="" >
                            <span className="field-label">Your Message:</span>
                            <textarea name="message" id="message" rows={5} className='field-input' placeholder="Hi I'am Interested in ..."/>
                        </label>
                        <button className="field-btn" type='submit' disabled={loading}>
                            {loading? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" className='field-btn_arrow' alt="" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact