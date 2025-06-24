'use client'
import React from 'react'
import Silk from '@/components/Silk'
import Image from 'next/image'
import SplitText from '@/components/SplitText'
import BlurText from '@/components/BlurText'
import AnimatedContent from '@/components/AnimatedContent'

const Login = () => {
  return (
    <div className='text-white'>
      <div className='absolute top-0 h-1/2 w-[100vw]'>
        <div className='absolute w-full h-full -z-20'><Silk
          speed={7}
          scale={1}
          color="#011EFF"
          noiseIntensity={1.5}
          rotation={0}
        /></div>
        <section className="p-24">
          <div className="" style={{ fontFamily: '"Inknut Antiqua"' }}>
            <SplitText
              text="Welcome!"
              className="text-[11vw] text-center"
              delay={150}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            /></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
        </section>
      </div>

      <div className="w-2/3 pt-24 pb-24 pl-10 pr-10 mt-[40vh]">
        <div className="text-lg mb-5 flex items-center gap-2">
          <div className="w-[40px] h-[3px] bg-white"></div>
          <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>
            Login
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <BlurText
            text="Ready for the first step?"
            delay={150}
            animateBy="words"
            direction="top"
            className=""
          />
        </div>
      </div>

    </div>
  )
}

export default Login
