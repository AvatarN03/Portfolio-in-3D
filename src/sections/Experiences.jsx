import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import {workExperiences} from "../constants/constants"
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from "../components/CanvasLoader"
import Developer from '../components/Developer'

const Experiences = () => {
    const [animationNames, setAnimationNames] = useState('idle')
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={2}/>
                            <spotLight position={[10,10,10]} angle={.15} penumbra={1}/>
                            <directionalLight position={[10,10,10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader/>} >
                            <Developer scale={3} position-y={-3} animationName={animationNames}/>
                            </Suspense>


                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            { workExperiences.map((item)=>(
                                <div className="work-content_container group" key={item.id} onClick={()=> setAnimationNames(item.animation.toLowerCase())} onPointerOver={()=> setAnimationNames(item.animation.toLowerCase())}>
                                    <div className="flex flex-col h-full justify-start items-center py-2" onPointerOut={()=> setAnimationNames('idle')}>
                                        <div className="work-content_logo">
                                            <img src={item.icon} alt="" className='w-full h-full'/>
                                        </div>
                                        <div className='work_content' />
                                    </div>
                                    <div className="sm:py-5 px-2.5 py-5 ">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">{item.pos}</p>
                                        <p className="group-hover:text-white transition duration-500 ease-in-out">{item.title}</p>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences