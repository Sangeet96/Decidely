import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-24'>
      <div className='pl-18 pr-18'>
        <p className='text-xl font-light' style={{ fontFamily: 'Inter' }}>Social</p>
        <div className='mt-3'>
          <div className='flex justify-between'>

            <div className="flex gap-4">
              <Link href={'https://www.linkedin.com/in/sangeet-kumar-b21702279/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-10 h-10 fill-[rgb(237,237,237)]"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </Link>

              <Link href={'https://leetcode.com/u/Sangeet_7/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-10 h-10 fill-white"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z" />
                </svg>
              </Link>

              <Link href={'https://github.com/Sangeet96'}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 fill-current text-white"
                  aria-hidden="true"
                >
                  <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z" />
                </svg>
              </Link>
            </div>

            <ul className='flex gap-4 text-md font-semibold' style={{ fontFamily: 'Inter' }}>
              <Link href={'/aboutme'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>About Me</Link>
              <Link href={'/contact'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>Contact</Link>
            </ul>

          </div>
        </div>
      </div>

      <div className="h-[57vh] relative mt-16">
        <Image
          src="/BGGradientIMG.webp"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Shadow on Top */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-10" />

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="bg-white/15 h-[1px]" />

            <div className="pl-18 pr-18 mt-9">
              <div className="mt-3 flex justify-between text-md font-semibold">
                <span style={{ fontFamily: 'Inter' }}>All copyrights reserved</span>
                <span style={{ fontFamily: 'Inter' }}>Developed By Sangeet Kumar</span>
              </div>
            </div>
          </div>

          {/* VoteSphere centered at bottom */}
          <div className="text-[11vw] text-white text-center" style={{ fontFamily: '"Inknut Antiqua"' }}>
            Decidely
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
