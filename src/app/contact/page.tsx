"use client";

import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Enter a valid phone number (e.g. +1234567890)"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
  };

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
          <p className="ml-2">1234 Street Name, City, State, 12345</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              <FaPhoneAlt className="inline-block mr-3" />
              Let&apos;s Talk
            </h2>
            <p className="text-green-400 ml-2">(123) 456-7890</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              <FaEnvelope className="inline-block mr-3" />
              General Support
            </h2>
            <p className="text-green-400 ml-2">info@seaworld.com</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Send Us A Message
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">YOUR NAME</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-500" : "focus:ring-green-500"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">YOUR EMAIL</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Eg. example@email.com"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-green-500"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">PHONE NUMBER</label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="Eg. +1 800 000000"
              className={`w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                errors.phone ? "focus:ring-red-500" : "focus:ring-green-500"
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone?.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">MESSAGE</label>
            <textarea
              {...register("message")}
              placeholder="Write us a message"
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-green-500"
              }`}
              rows={5}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message?.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-700 text-white py-2 rounded hover:bg-cyan-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
