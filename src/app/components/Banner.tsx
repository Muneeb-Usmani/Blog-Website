import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gray-800 opacity-50 z-10"></div>
        <Image
          src="/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white z-20">
          <h1 className="text-4xl sm:text-5xl font-bold md:text-6xl md:font-extrabold">Sea World</h1>
          <p className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl">
            Our mission is to get youth excited about our<span className="sm:block">ocean and empower them to be ocean heroes!</span>
          </p>
          <Link
            href="#"
            className="mt-6 inline-block bg-cyan-700 text-white py-2 px-4 rounded-lg text-base md:text-lg font-light">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
