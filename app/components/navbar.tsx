"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black bg-opacity-90 fixed w-full top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-extrabold text-white tracking-tight">Media Boss</h1>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" legacyBehavior>
                            <a className="text-gray-300 hover:text-white text-lg transition">Home</a>
                        </Link>
                        <Link href="/about" legacyBehavior>
                            <a className="text-gray-300 hover:text-white text-lg transition">About</a>
                        </Link>
                        <Link href="#services" legacyBehavior>
                            <a className="text-gray-300 hover:text-white text-lg transition">Services</a>
                        </Link>
                        <Link href="#portfolio" legacyBehavior>
                            <a className="text-gray-300 hover:text-white text-lg transition">Portfolio</a>
                        </Link>
                        <Link href="#contact" legacyBehavior>
                            <a className="text-gray-300 hover:text-white text-lg transition">Contact</a>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        <Link href="#contact" legacyBehavior>
                            <a className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition">
                                Get in Touch
                            </a>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-90 px-6 pt-4 pb-6">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="block text-gray-300 hover:text-white text-lg transition">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" legacyBehavior>
                                <a className="block text-gray-300 hover:text-white text-lg transition">About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" legacyBehavior>
                                <a className="block text-gray-300 hover:text-white text-lg transition">Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#portfolio" legacyBehavior>
                                <a className="block text-gray-300 hover:text-white text-lg transition">Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" legacyBehavior>
                                <a className="block text-gray-300 hover:text-white text-lg transition">Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" legacyBehavior>
                                <a className="block px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-center hover:bg-blue-700 transition">
                                    Get in Touch
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
