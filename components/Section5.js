import React from 'react'

const Section5 = () => {
    return (
        <div className='pl-10 pr-10 mt-16 mb-18'>

            <div className="w-[55vw] mb-20">
                <div className="text-lg mb-5 flex items-center gap-2">
                    <div className="w-[40px] h-[3px] bg-white"></div>
                    <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>How it Works?</div>
                </div>
                <div className="text-6xl font-medium leading-tight" style={{ fontFamily: '"Inter Display"' }}>
                    <span>From Start to Vote :</span>{' '}
                    <span className="text-white/55">The Voting Process Unfolded</span>
                </div>
            </div>

            <div>
                <div className='mb-16'>
                    <div className='flex text-4xl mb-16'>
                        <span className='w-1/5 pl-5 pr-5 pt-6 pb-6 bg-[#011EFF] rounded-bl-4xl rounded-tl-4xl'>Step 1</span>
                        <span className='w-4/5 pt-5 pb-5 pl-20 pr-14 bg-[#FFFFFF1F] rounded-br-4xl rounded-tr-4xl'>Sign Up & Join</span>
                    </div>
                    <div className='ml-6  text-4xl'>
                        <div className='bg-[#111114] pt-6 pb-6 pl-8 pr-8 rounded-4xl'>Create your account and join your community or society’s voting group.</div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className='flex text-4xl mb-16'>
                        <span className='w-1/5 pl-5 pr-5 pt-6 pb-6 bg-[#011EFF] rounded-bl-4xl rounded-tl-4xl'>Step 2</span>
                        <span className='w-4/5 pt-5 pb-5 pl-20 pr-14 bg-[#FFFFFF1F] rounded-br-4xl rounded-tr-4xl'>Create or Participate</span>
                    </div>
                    <div className='ml-6 mb-16 text-4xl'>
                        <div className='bg-[#111114] pt-6 pb-6 pl-8 pr-8 rounded-4xl'>Organizers set up elections or polls.</div>
                    </div>
                    <div className='ml-6  text-4xl'>
                        <div className='bg-[#111114] pt-6 pb-6 pl-8 pr-8 rounded-4xl'>Voters cast their votes securely and easily.</div>
                    </div>
                </div>

                <div>
                    <div className='flex text-4xl mb-16'>
                        <span className='w-1/5 pl-5 pr-5 pt-6 pb-6 bg-[#011EFF] rounded-bl-4xl rounded-tl-4xl'>Step 3</span>
                        <span className='w-4/5 pt-5 pb-5 pl-20 pr-14 bg-[#FFFFFF1F] rounded-br-4xl rounded-tr-4xl'>View Results & Stay Informed</span>
                    </div>
                    <div className='ml-6  text-4xl'>
                        <div className='bg-[#111114] pt-6 pb-6 pl-8 pr-8 rounded-4xl'>Check real-time results and stay updated on all community decisions.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
