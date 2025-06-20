'use client'
import React from 'react'
import Silk from '@/components/Silk'
import Image from 'next/image'

const Contact = () => {
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
          <div className=""><h1 className="text-[11vw] text-center" style={{ fontFamily: '"Inknut Antiqua"' }}>Contact</h1></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
        </section>
      </div>

      <div className="w-2/3 pt-24 pb-24 pl-10 pr-10 mt-[40vh]">
        <div className="text-lg mb-5 flex items-center gap-2">
          <div className="w-[40px] h-[3px] bg-white"></div>
          <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>
            Contact Us
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <span>We'd Love to Hear From You :</span>{' '}
          <span className="text-white/55">Get in Touch with Us Today!</span>
        </div>
      </div>

      <div className='flex justify-center items-center pl-10 pr-10 gap-5'>
        <div className='w-1/2 flex gap-18'>
          <div className='flex flex-col gap-3'>
            <Image
                src="/EmailIcon.avif"
                alt="Background image"
                height={60}
                width={60}
              />
            <p className='text-2xl semi-bold'>Email</p>
            <p className='text-white/55'>Reach out to our team for quick assistance.</p>
            <p className='text-white/55 text-lg'>sangeetbnl5@gmail.com</p>
          </div>
          <div className='flex flex-col gap-3'>
            <Image
                src="/CallIcon.avif"
                alt="Background image"
                height={60}
                width={60}
              />
            <p className='text-2xl semi-bold'>Call</p>
            <p className='text-white/55'>Drop a message, and we’ll get back to you soon.</p>
            <p className='text-white/55 text-lg'>+91 88475 XXXXX</p>
          </div>
        </div>

        <div className='w-1/2'>Form</div>
      </div>

    </div>
  )
}

export default Contact
