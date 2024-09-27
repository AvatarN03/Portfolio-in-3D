import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { Leva, useControls } from 'leva'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import { calculateSizes } from '../constants/constants'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import Button from '../components/Button'

function Hero() {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className='min-h-screen  w-full flex flex-col relative' id='home'>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='text-xl sm:text-3xl text-center text-white font-medium font-generalsans'>Hii, I am Prashanth<span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Learning WebDev and Building Projects </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className='w-full h-full z-40' >
          <Suspense fallback={<CanvasLoader />}>


            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
              <group>
                <Cube position={sizes.cubePosition}/>
                <Rings position={sizes.ringPosition}/>
              </group>
            
            <ambientLight intensity={4} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            
          </Suspense>

        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#contact" className='w-fit'>
          <Button name="Lets work toGether" isBeam containerClass="sm:w-fit w-full  sm:min-w-96"/>
        </a>
      </div>
    </section>
  )
}

export default Hero