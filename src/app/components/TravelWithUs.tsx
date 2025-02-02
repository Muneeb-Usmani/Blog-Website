import React from "react";
import Image from "next/image";

const TravelWithUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Travel With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              src: "/snorkeling.jpg",
              alt: "Snorkeling Trips",
              title: "Snorkeling Trips",
            },
            {
              src: "/wildlife.jpeg",
              alt: "WildLife Encounters",
              title: "Wildlife Encounters",
            },
            {
              src: "/volunteer.jpeg",
              alt: "Volunteer Trips",
              title: "Volunteer Trips",
            },
            {
              src: "/familytrip.jpg",
              alt: "Family Trips",
              title: "Family Trips",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48 group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute -bottom-0 left-0 right-0 text-left text-white bg-gradient-to-t from-black p-2 rounded-b-lg">
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelWithUs;
