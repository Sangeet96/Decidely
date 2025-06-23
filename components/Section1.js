'use client'
import React from 'react'
import Silk from './Silk';
import BlurText from "./BlurText";

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
                <div className="" style={{ fontFamily: '"Inknut Antiqua"' }}><BlurText
                    text="Decidely"
                    delay={350}
                    animateBy="words"
                    direction="top"
                    className="text-[11vw] mb-11 justify-center items-center"
                /></div>
                <div className="" style={{ fontFamily: 'Inder' }}><BlurText
                    text="Voting Made Simple, Decisions Made Together."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-4xl text-center justify-center items-center"
                /></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
            </section>
        </div>
    )
}

export default Section1
