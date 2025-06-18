'use client';
import React, { useState } from 'react';

const Section6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'Do I need any technical knowledge to create an election?',
      answer:
        'Not at all! VoteSphere is built to be simple and intuitive. Organizers can create and manage elections in just a few clicks—no coding or setup hassle required.',
    },
    {
      question: 'Is my vote anonymous and secure?',
      answer:
        `Yes, every vote on VoteSphere is securely recorded and kept anonymous. We prioritize transparency in results while protecting each voter's privacy.`,
    },
    {
      question: 'Can I use VoteSphere on my phone or tablet?',
      answer:
        'Yes! VoteSphere is fully responsive and works seamlessly on all devices—phones, tablets, and desktops—so you can vote or manage elections anytime, anywhere.',
    },
  ];

  return (
    <section className="flex gap-20 pt-24 pb-24 pl-10 pr-10">
      <div className="w-1/2">
        <div className="text-lg mb-5 flex items-center gap-2">
          <div className="w-[40px] h-[3px] bg-white"></div>
          <div className="text-xl font-bold" style={{ fontFamily: 'Inter' }}>
            Questions
          </div>
        </div>
        <div
          className="text-6xl font-medium leading-tight"
          style={{ fontFamily: '"Inter Display"' }}
        >
          <span>Casting Clarity :</span>{' '}
          <span className="text-white/55">Common Questions About Decidely</span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="p-6 text-lg rounded-3xl border border-white/10 font-semibold bg-[#111114] cursor-pointer transition-all duration-300 relative"
            onClick={() => toggleAnswer(index)}
          >
            <div className={`flex justify-between items-center transition-all ease-in-out duration-700 ${openIndex === index ? '' : 'translate-y-3'}`}>
              <span className="">{item.question}</span>
              <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div
              className={`mt-4 text-white/70 text-lg font-normal transition-all duration-700 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`} style={{ fontFamily: 'Inter' }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
