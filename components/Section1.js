'use client'
import React from 'react'
import Silk from './Silk';

const Section1 = () => {
    return (
        <div className='absolute top-0 h-screen w-[100vw]'>
            <div className='absolute w-full h-full -z-20'><Silk
                speed={7}
                scale={1}
                color="#011EFF"
                noiseIntensity={1.5}
                rotation={0}
            /></div>
            <section className="p-24">
                <div className=""><h1 className="text-[11vw] text-center mb-11" style={{ fontFamily: '"Inknut Antiqua"' }}>Decidely</h1></div>
                <div className=""><h2 className="text-4xl text-center" style={{ fontFamily: 'Inder' }}>Voting Made Simple, Decisions Made Together.</h2></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
            </section>
        </div>
    )
}

export default Section1
