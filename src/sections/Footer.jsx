import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3  border-t border-black-300 flex  justify-between items-center flex-wrap gap-5 " id='#footer'>
            <div className="text-white-500 flex gap-2 ">
                <p className="">Terms And Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">

                    <a href="https://github.com/AvatarN03" className='flex justify-center items-center' > <img src="/assets/github.svg" alt="" className='w-1/2 h-1/2' /></a>
                </div>
                <div className="social-icon">

                    <a href="https://x.com/jsprashanth003?t=xM3dE7050DC5_ph7nswZ1g&s=08" className='flex justify-center items-center' ><img src="/assets/twitter.svg" alt="" className='w-1/2 h-1/2' /></a>
                </div>
                <div className="social-icon">

                    <a href="https://www.instagram.com/js.prashanth/"  className='flex justify-center items-center' ><img src="/assets/instagram.svg" alt="" className='w-1/2 h-1/2' /></a>
                </div>
            </div>
            <p className='text-white-500 '>&copy; 2024 by Naidu . All Rights Reserved</p>

        </section>
    )
}

export default Footer