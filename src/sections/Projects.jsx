import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants/constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from "../components/CanvasLoader"
import DemoComputer from '../components/DemoComputer';

const Projects = () => {
    const Project = myProjects.length;
    const [selectiveIndex, setSelectiveIndex] = useState(0)
    const currentProject = myProjects[selectiveIndex];
    const handleNavigation = (direction)=>{
        setSelectiveIndex((prevIndex)=>{
            if(direction === 'previous'){
                return prevIndex === 0 ? Project-1: prevIndex -1;
            }else{
                return prevIndex  === Project ? 0 : prevIndex +1;
            }
        })

    }
  return (
    <section className="c-space my-20" >
        <p className="head-text">My Work</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="relative flex gap-5 flex-col py-10 px-5 shadow-2xl shadow-black-200 sm:p-10">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} alt="" className='w-full h-96 object-cover rounded-xl' />
                </div>
                <div className="p-3 backdrop-blur-3xl backdrop-filter w-fit rounded-lg" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="" className='w-10 h-10 shadow-sm' />
                    
                </div>
                <div className="flex flex-col gap-5 text-white-500 my-5">
                    <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-5 ">
                    <div className="flex gap-2 items-center">
                        {
                            currentProject.tags.map( (tag, index)=>(
                                <div className="tech-logo" key={index}>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))
                        }
                        
                    </div>
                    <a href={currentProject.href} target='_blank' rel="noreferrer" className='flex items-center gap-2 cursor-pointer text-white-600'>
                        <p className=""> CheckLive Site</p>
                        <img src="/assets/arrow-up.png" alt="" className='w-3 h-3 object-contain' />
                    </a>
                    
                </div>
                <div className=" flex justify-between items-center mt-7 ">
                    <button className='btn' onClick={()=> handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="" className='w-4 h-4' />
                    </button>
                    <button className='btn' onClick={()=> handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="" className='w-4 h-4' />
                    </button>
                </div>
            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                    <ambientLight intensity={Math.PI}/>
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                         <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                            <DemoComputer texture={currentProject.texture} />
                            
                         </group>
                        </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects