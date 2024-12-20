import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'

import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from '../constants/index.js'

const Hero = () => {
    
    const isSmall = useMediaQuery({ maxWidth:440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024});
    

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"> Hi, I am Nathaniel <span className="waving-hand"> &#128075;</span></p>
            <p className="hero_tag text-gray_gradient">Building Mobile & Web Applications</p>
        </div>

        <div className="w-full h-full absolute inset-0">
     
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                <PerspectiveCamera makeDefault position={[0,0,30]}/>

                <HackerRoom
                 //scale={0.07} 
                 // position={[0, 0, 0]} 
                 // rotation={[0, 280, 0]}
                 position={[2, -8, 2 ]} 
                 rotation={[0, -Math.PI, 0]}
                 scale={isMobile ? 0.07 : 0.1}
                 />
          
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero
