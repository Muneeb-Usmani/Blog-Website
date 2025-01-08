import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 relative bg-gray-800">
        <Image
          src="/contact.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-65"
        />

        <div className="relative z-10 text-white p-8 flex flex-col justify-center h-full">
          <h2 className="text-xl font-semibold mb-4">
            <FaMapMarkerAlt className="inline-block mr-3" />
            Address
          </h2>
          <p className="ml-2"> 1234 Street Name City, State, 12345</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              <FaPhoneAlt className="inline-block mr-3" /> Let&apos;s Talk
            </h2>
            <p className="text-green-400 ml-2"> (123) 456-7890</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              <FaEnvelope className="inline-block mr-3" />
              General Support
            </h2>
            <p className="text-green-400 ml-2"> info@seaworld.com</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Send Us A Message
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">YOUR NAME</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">YOUR EMAIL</label>
            <input
              type="email"
              placeholder="Eg. example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Eg. +1 800 000000"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">MESSAGE</label>
            <textarea
              placeholder="Write us a message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-700  text-white py-2 rounded hover:bg-cyan-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
