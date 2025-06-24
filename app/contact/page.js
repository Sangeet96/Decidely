'use client'
import React from 'react'
import Silk from '@/components/Silk'
import Image from 'next/image'
import SplitText from '@/components/SplitText'
import BlurText from '@/components/BlurText'
import AnimatedContent from '@/components/AnimatedContent'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              text="Contact"
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
            Contact Us
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <BlurText
            text="We'd Love to Hear From You : "
            delay={150}
            animateBy="words"
            direction="top"
            className=""
          />
          <BlurText
            text="Get in Touch with Us Today!"
            delay={170}
            animateBy="words"
            direction="top"
            className="text-white/55"
          />
        </div>
      </div>

      <div className='flex justify-center items-center pl-10 pr-10 gap-5'>
        <div className='w-1/2 flex gap-18'>
          <AnimatedContent
            distance={75}
            direction="vertical"
            reverse={false}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.1}
          >
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
          </AnimatedContent>
          <AnimatedContent
            distance={75}
            direction="vertical"
            reverse={false}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.1}
          >
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
          </AnimatedContent>
        </div>

        <div className='w-1/2'>
          <form onSubmit={""}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />

            <label>Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="4"
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
