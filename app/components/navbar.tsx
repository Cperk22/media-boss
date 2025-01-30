"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-lg shadow-md"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold tracking-wide">
                    MediaBoss
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Services", href: "/services" },
                        { name: "Contact", href: "/contact" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={item.href} className="text-gray-300 hover:text-white text-lg transition">
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden bg-black bg-opacity-95 py-4 px-6 flex flex-col space-y-6 text-center"
                >
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Services", href: "/services" },
                        { name: "Contact", href: "/contact" }
                    ].map((item, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link href={item.href} className="text-gray-300 hover:text-white text-xl transition" onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;