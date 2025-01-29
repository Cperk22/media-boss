"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-white tracking-wide">
                    MediaBoss
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/home" className="text-gray-300 hover:text-white transition">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
                    <Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black bg-opacity-90 absolute top-16 left-0 w-full flex flex-col space-y-4 p-6">
                    <Link href="/home" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/services" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
