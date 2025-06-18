"use client"

import React from 'react'
import { useState } from 'react'

const Section3 = () => {
    const [selectedCard, setSelectedCard] = useState("business");

    const cards = [
        {
            id: 'business',
            label: 'Business',
            description: 'Businesses can use VoteSphere to streamline internal decision-making, employee engagement, and transparent team voting—all in one secure platform.',
            svg1: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white/55"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <g>
                    <path d="M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z" />
                </g>
            </svg>),
            svg2: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z" />
            </svg>
            ),
            bgImage: "url('/SquareImg.avif')"
        },
        {
            id: 'residents',
            label: 'Housing Societies',
            description: 'Housing Societies can use VoteSphere to easily participate in housing society decisions, elections, and polls with transparency and convenience.',
            svg1: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white/55"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <g>
                    <path d="M128,166a38,38,0,1,0-38-38A38,38,0,0,0,128,166Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,128,102ZM240,58H16a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H240a6,6,0,0,0,6-6V64A6,6,0,0,0,240,58ZM22,108.82A54.73,54.73,0,0,0,60.82,70H195.18A54.73,54.73,0,0,0,234,108.82v38.36A54.73,54.73,0,0,0,195.18,186H60.82A54.73,54.73,0,0,0,22,147.18ZM234,96.29A42.8,42.8,0,0,1,207.71,70H234ZM48.29,70A42.8,42.8,0,0,1,22,96.29V70ZM22,159.71A42.8,42.8,0,0,1,48.29,186H22ZM207.71,186A42.8,42.8,0,0,1,234,159.71V186Z" />
                </g>
            </svg>),
            svg2: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z" />
            </svg>
            ),
            bgImage: "url('/SquareImg.avif')"
        },
        {
            id: 'collegesocieties',
            label: 'College Societies',
            description: 'College societies can use VoteSphere to conduct fair elections, plan events, and make group decisions seamlessly and transparently.',
            svg1: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white/55"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <g>
                    <path d="M246,128a6,6,0,0,1-6,6H221.61A46.07,46.07,0,0,1,176,174H134v28h26a30,30,0,0,1,30,30,6,6,0,0,1-12,0,18,18,0,0,0-18-18H134v18a6,6,0,0,1-12,0V214H96a18,18,0,0,0-18,18,6,6,0,0,1-12,0,30,30,0,0,1,30-30h26V174H80a46.07,46.07,0,0,1-45.61-40H16a6,6,0,0,1,0-12H40a6,6,0,0,1,6,6,34,34,0,0,0,34,34h96a34,34,0,0,0,34-34,6,6,0,0,1,6-6h24A6,6,0,0,1,246,128ZM69.43,137.17A14,14,0,0,1,66.14,126L79.86,30A14.07,14.07,0,0,1,93.72,18h68.56a14.07,14.07,0,0,1,13.86,12l13.72,96A14,14,0,0,1,176,142H80A14,14,0,0,1,69.43,137.17Zm9.06-7.86A2,2,0,0,0,80,130h96a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59l-13.72-96a2,2,0,0,0-2-1.72H93.72a2,2,0,0,0-2,1.72L78,127.72A2,2,0,0,0,78.49,129.31Z" />
                </g>
            </svg>),
            svg2: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <path d="M248,128a8,8,0,0,1-8,8H223.33A48.08,48.08,0,0,1,176,176H136v24h24a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H136v16a8,8,0,0,1-16,0V216H96a16,16,0,0,0-16,16,8,8,0,0,1-16,0,32,32,0,0,1,32-32h24V176H80a48.08,48.08,0,0,1-47.33-40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,8,8,32,32,0,0,0,32,32h96a32,32,0,0,0,32-32,8,8,0,0,1,8-8h24A8,8,0,0,1,248,128ZM80,144h96a16,16,0,0,0,15.84-18.26l-13.72-96A16.08,16.08,0,0,0,162.28,16H93.72A16.08,16.08,0,0,0,77.88,29.74l-13.72,96A16,16,0,0,0,80,144Z" />
            </svg>
            ),
            bgImage: "url('/SquareImg.avif')"
        },
        {
            id: 'developercommunities',
            label: 'Developer Communities',
            description: 'Developer communities can use VoteSphere to collaboratively make decisions on projects, leadership roles, and event planning through secure and efficient voting.',
            svg1: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white/55"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <g>
                    <path d="M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z" />
                </g>
            </svg>),
            svg2: (<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-full h-full fill-white"
                style={{ userSelect: 'none', flexShrink: 0 }}
            >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z" />
            </svg>
            ),
            bgImage: "url('/SquareImg.avif')"
        },
    ];

    return (
        <div>
            <section className="h-screen pl-10 pr-10">

                <div className="mb-16">
                    <div className="w-[55vw] text-lg mb-5 flex items-center gap-2">
                        <div className="w-[40px] h-[3px] bg-white"></div>
                        <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>For Whom?</div>
                    </div>
                    <div className="w-[45vw] text-6xl font-medium leading-tight" style={{ fontFamily: '"Inter Display"' }}>Who Should Definitely Use Decidely?</div>
                </div>

                <div className="flex gap-16 mb-8">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => setSelectedCard(card.id)}
                            className={`relative w-1/4 h-80 cursor-pointer border-2 overflow-hidden
                            ${selectedCard === card.id ? 'rounded-full border-blue-700' : 'transition-all ease-in-out duration-300 rounded-[65px] border-white/55 hover:border-indigo-400'}`}
                        >
                            <div
                                className={`absolute inset-0 z-0 bg-center bg-cover transition-all duration-500 ease-in-out 
                                ${selectedCard === card.id ? 'opacity-100 blur-sm brightness-50 slowspin' : 'opacity-0 scale-0'}
                                `}
                                style={{
                                    backgroundImage: card.bgImage,
                                }}
                            ></div>

                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                <div className="w-12 h-12">
                                    {selectedCard === card.id ? card.svg2 : card.svg1}
                                </div>
                                <div className={`text-2xl mt-2 ${selectedCard === card.id ? 'text-white' : 'text-white/55'}`}>
                                    {card.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="border border-white/55 rounded-[20px] h-24">
                    <div className="w-7/12 pt-6 pb-6 pl-8 pr-8 text-lg" style={{ fontFamily: 'Inter' }}>{cards.find(c => c.id === selectedCard)?.description}</div>
                    <div className="w-5/12"></div>
                </div>
            </section>
        </div>
    )
}

export default Section3
