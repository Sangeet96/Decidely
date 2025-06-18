'use client'
import React from 'react'
import Silk from '@/components/Silk'

const About = () => {
  return (
    <div className='text-white h-screen'>
      <div className='absolute top-0 h-1/2 w-[100vw]'>
        <div className='absolute w-full h-full -z-20'><Silk
          speed={7}
          scale={1}
          color="#011EFF"
          noiseIntensity={1.5}
          rotation={0}
        /></div>
        <section className="p-24">
          <div className=""><h1 className="text-[11vw] text-center" style={{ fontFamily: '"Inknut Antiqua"' }}>About Me</h1></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
        </section>
      </div>

      <div className="w-2/3 pt-24 pb-24 pl-10 pr-10 mt-[40vh]">
        <div className="text-lg mb-5 flex items-center gap-2">
          <div className="w-[40px] h-[3px] bg-white"></div>
          <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>
            Myself
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <span>Innovator, Developer, Visionary — </span>{' '}
          <span className="text-white/55">Your Next Team Member</span>
        </div>
      </div>
    </div>
  )
}

export default About
