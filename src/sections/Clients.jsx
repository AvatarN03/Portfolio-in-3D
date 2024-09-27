import React from 'react'
import { clientReviews } from '../constants/constants'

const Clients = () => {
  return (
    <section className="c-space my-20">
        <h3 className="head-text">Hear from Clients </h3>
        <div className="client-container ">
            {
                clientReviews.map(client=>(
                    <div className="client-review" key={client.id}>
                        <div className="">
                            <p className="text-white font-light">{client.review}</p>
                            <div className="client-content">
                                <div className="flex gap-3 ">
                                    <img src={client.img} alt=""  className='w-12 h-12 rounded-full'/>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{client.name}</p>
                                        <p className="md:text-base text-sm font-light text-white-500">{client.position}</p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2 ">
                                    {Array.from({length:5}).map((_, index)=>(
                                        <img src="/assets/star.png" alt="" key={index} className='w-5 h-5'/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Clients