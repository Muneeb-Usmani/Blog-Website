'use client'
import { useState } from 'react';
import { MinusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex-grow relative">
            <nav className="relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sea.jpg"
                        alt="Nav Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-100"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none"
                            >
                                {isOpen ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MinusIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                            <div className="flex-shrink-0">
                                <h1 className="text-white text-4xl font-pacifico flex items-center">
                                    Sea World
                                </h1>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 hover:bg-opacity-15">Home</Link>
                                    <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 hover:bg-opacity-15">About</Link>
                                    <Link href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 hover:bg-opacity-15">Blog</Link>
                                    <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 hover:bg-opacity-15">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900">Home</Link>
                            <Link href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900">About</Link>
                            <Link href="/blog" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900">Blog</Link>
                            <Link href="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900">Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavBar;
