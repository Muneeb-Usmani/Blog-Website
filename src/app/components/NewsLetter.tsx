'use client'
import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-gray-600">
              Get the latest updates and exclusive content straight to your inbox.
            </p>
          </div>
          <form
            className="mt-6 lg:mt-0 lg:ml-8 flex flex-col lg:flex-row lg:items-center w-full lg:w-auto"
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-500"
              required
            />
            <button
              type="submit"
              className="mt-4 lg:mt-0 lg:ml-4 w-full lg:w-auto bg-cyan-700 text-white py-3 px-6 rounded-md font-light text-lg hover:bg-sky-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter
