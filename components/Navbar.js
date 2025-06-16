'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [showFullNav, setShowFullNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setShowFullNav(false)
            } else {
                // Scrolling up
                setShowFullNav(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <div className={`w-auto m-auto pt-4 pb-4 pr-8 pl-8 sticky top-0 transition-all duration-300 z-50 ${showFullNav ? 'bg-transparent' : 'bg-transparent backdrop-blur-3xl rounded-4xl'}`}>
            <div className={`text-white flex items-center justify-between font-semibold`} style={{ fontFamily: 'Inter' }}>
                <h1 className={`text-3xl transition-transform ease-in duration-300 ${showFullNav ? '' : 'translate-x-[39vw]'}`}>VoteSphere</h1>
                <ul className='flex gap-4 text-md'>
                    {showFullNav && (
                        <>
                            <Link href={'/aboutme'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>About Me</Link>
                            <Link href={'/contact'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>Contact</Link>
                        </>
                    )}
                    <Link href={'/login'} className={`bg-white text-black rounded-3xl border border-[#011EFF] pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-300 hover:bg-[#011EFF] hover:border-white hover:text-white ${showFullNav ? '' : 'translate-x-[-39vw]'}`}>Login</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
