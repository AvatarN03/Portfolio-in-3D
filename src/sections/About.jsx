import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
  let email = "jsprashanth003@gmail.com";

  const [asCopied, setAsCopied] = useState(false);
  const handleCopy =()=>{
    setAsCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(
      ()=>{
        setAsCopied(false)
      }, 2500
    )
  }
  return (
    <section className="c-space my-20" id='about'>
      <div className="h-full grid xl:grid-cols-3 md:grid-cols-2 xl:grid-rows-6 grid-cols-1 gap-5">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/Self.jpg" alt="" className='h-fit w-full sm:h-[268px] object-contain scale-120 rounded-3xl' />
            <div className="">
              <p className='grid-headtext'>Hi, I am Prashanth Naidu</p>
              <p className="grid-subtext">I am Pursing B.Tech Degree in Computer Engineering at TCP, Navi-Mumbai. I am good at logical and planning. </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="" className='w-full sm:w-[276px] h-fit m-auto object-contain' />
            <div className="">
              <p className="grid-headtext">TechStack</p>
              <p className="grid-subtext">I am good in JavaScript, Java, Python, JS FrameWorks like React & Vue.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe 
              height={326}
              weight={326}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

              />

            </div>
            <div className="">
              <p className='grid-headtext'>I stay in Mumbai, India.</p>
              <p className='grid-subtext'>I am based in India, My Native is Tamil-Nadu</p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10"/>
            </div>
            
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className='w-full sm:h-[266px] h-fit object-contain mx-auto' />
            <div className="">
              <p className="grid-headtext">My Passion</p>
              <p className="grid-subtext">I love solving Problems and Buliding things from Code. Coding is not Profession it's my Passion.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="" className='w-full h-fit object-contain md:h-[126px] sm:h-[276px] sm:object-top' />
            <div className="space-y-2">
              <p className="grid-subtext text-center"> Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={asCopied? 'assets/tick.svg': 'assets/copy.svg'} alt="" />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About