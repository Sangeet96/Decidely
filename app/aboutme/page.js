'use client'
import React from 'react'
import Silk from '@/components/Silk'
import Image from 'next/image'
import SplitText from '@/components/SplitText'
import BlurText from '@/components/BlurText'

const About = () => {
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
              text="About Me"
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
            Myself
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <BlurText
            text="Innovator, Developer, Visionary — "
            delay={150}
            animateBy="words"
            direction="top"
            className=""
          />
          <BlurText
            text="Your Next Team Member"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-white/55"
          />
        </div>
      </div>

      <div className="relative w-4/5 h-[100vh] m-auto">
        <Image
          src="/TIET_BG.avif"
          alt="Background image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
      </div>

      <div className='pt-24 pb-24 pl-10 pr-10 text-lg' style={{ fontFamily: 'Inter' }}>
        <p className='w-3/5'>
          I'm <strong>Sangeet Kumar</strong>, a Computer Science student at <strong>Thapar Institute of Engineering and Technology</strong>, graduating in <strong>2026</strong>. I’m deeply passionate about writing <strong>clean, efficient code</strong> and building <strong>full-stack applications</strong> that are both <strong>scalable</strong> and <strong>user-friendly</strong>.
        </p>
        <p className='w-3/5 mt-4'>
          I work confidently across the tech stack with a strong grip on languages like <strong>Java</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Python</strong>, and <strong>C/C++</strong>. I specialize in frontend development using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and <strong>Framer</strong>, and I also build robust backends with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
        </p>
        <p className='w-3/5 mt-4'>
          I'm experienced with tools like <strong>Docker</strong>, <strong>GitHub</strong>, <strong>Postman</strong>, <strong>Figma</strong>, <strong>Vercel</strong>, and <strong>Google Colab</strong>, and I’m comfortable managing databases using <strong>MongoDB</strong>, <strong>SQL</strong>, and <strong>PL/SQL</strong>.
        </p>
        <p className='w-3/5 mt-4'>
          I have a strong foundation in <strong>Data Structures</strong>, <strong>Algorithms</strong>, <strong>Operating Systems</strong>, and <strong>DBMS</strong>, and I consistently apply this knowledge to write <strong>optimized</strong> and <strong>structured code</strong>. I'm also an active problem solver on <strong>LeetCode</strong>, having solved <strong>450+ problems</strong> in <strong>Java</strong>, which reflects my <strong>love for challenges</strong> and <strong>constant learning</strong>.
        </p>
      </div>

      <div className='flex justify-center items-center gap-6 pt-10 pb-10 pl-10 pr-10'>
        <div className='relative w-1/3 h-[50vh] rounded-3xl overflow-hidden'>
          <Image
            src="/LC_Badge.avif"
            alt="Background image"
            fill
            className="object-fit"
          />
        </div>
        <div className='relative w-1/3 h-[50vh] rounded-3xl overflow-hidden'>
          <Image
            src="/MyPic.avif"
            alt="Background image"
            fill
            className="object-cover"
          />
        </div>
        <div className='relative w-1/3 h-[50vh] rounded-3xl overflow-hidden'>
          <Image
            src="/LCStreak.png"
            alt="Background image"
            fill
            className="object-fit"
          />
        </div>
      </div>

    </div>
  )
}

export default About
