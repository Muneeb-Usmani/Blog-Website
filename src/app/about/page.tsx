import React from 'react'
import WhyUs from '../components/WhyUs'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gray-800 opacity-50 z-10"></div>
        <Image
          src="/about.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white z-20">
          <h1 className="text-4xl sm:text-5xl font-semibold md:text-6xl md:font-bold">About Us</h1>
          <p className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl">
          What does we do? Sea World is the largest international <span className="sm:block"> organization dedicated solely to ocean conservation.</span>
          </p>
          
        </div>
      </div>
    </div>
    <WhyUs />
    </>
)
}

export default About