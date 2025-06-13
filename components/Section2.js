import React from 'react'
import Image from "next/image";

const Section2 = () => {
    return (
        <div>
            <section className="h-screen pt-24 pb-24 pl-10 pr-10">
                <div className="mb-16">
                    <div className="w-[55vw] text-lg mb-5 flex items-center gap-2">
                        <div className="w-[40px] h-[3px] bg-white"></div>
                        <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>About VoteSphere</div>
                    </div>
                    <div className="w-[45vw] text-6xl font-medium leading-tight" style={{ fontFamily: '"Inter Display"' }}>Why You Absolutely Should Choose VoteSphere</div>
                </div>
                <div className="flex items-center gap-16">
                    <div className="w-1/2 flex">
                        <div className="w-full h-full rounded-[inherit] overflow-hidden">
                            <Image
                                src="/triangle.avif"
                                alt=""
                                width={251}
                                height={251}
                                priority={false}
                                quality={100}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="w-full h-full rounded-[inherit] overflow-hidden">
                            <Image
                                src="/square1.avif"
                                alt=""
                                width={251}
                                height={251}
                                priority={false}
                                quality={100}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="w-full h-full rounded-[inherit] overflow-hidden">
                            <Image
                                src="/square2.avif"
                                alt=""
                                width={251}
                                height={251}
                                priority={false}
                                quality={100}
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 text-lg font-normal">
                        <p className="mb-4" style={{ fontFamily: 'Inter' }}>VoteSphere is a secure, easy-to-use digital voting platform designed specifically for small communities such as housing welfare societies, college clubs, and local organizations. Our mission is to simplify decision-making and promote transparency in group voting processes.</p>
                        <p style={{ fontFamily: 'Inter' }}>Whether you're selecting a new committee, deciding on event plans, or collecting opinions from members, VoteSphere makes the entire voting experience smooth, accessible, and trustworthy. No paperwork. No confusion. Just clean, verifiable results.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
