import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-black pt-4 pb-4 pr-8 pl-8'>
            <div className='text-white flex justify-between font-semibold' style={{ fontFamily: 'Inter' }}>
                <h1 className='text-3xl'>VoteSphere</h1>
                <ul className='flex gap-4 text-md'>
                    <Link href={'/aboutme'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>About Me</Link>
                    <Link href={'/contact'} className='bg-white/20 rounded-3xl pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF]'>Contact</Link>
                    <Link href={'/login'} className='bg-white text-black rounded-3xl border border-[#011EFF] pl-4 pr-4 pt-2 pb-2 transition-all ease-in duration-200 hover:bg-[#011EFF] hover:border-white hover:text-white'>Login</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
