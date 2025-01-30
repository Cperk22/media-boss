"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-black text-gray-300 py-12"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                {/* Logo & Description */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">MediaBoss</h2>
                    <p className="mt-2 text-gray-400 max-w-sm">
                        Delivering innovative media solutions that captivate, inspire, and drive results.
                    </p>
                </div>
                
                {/* Navigation Links */}
                <div className="flex space-x-8 mt-6 md:mt-0">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Services", href: "/services" },
                        { name: "Contact", href: "/contact" }
                    ].map((item, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link href={item.href} className="text-gray-400 hover:text-white text-lg transition">
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                
                {/* Social Media Icons */}
                <div className="flex space-x-6 mt-6 md:mt-0">
                    {[ 
                        { icon: Facebook, href: "#" }, 
                        { icon: Twitter, href: "#" }, 
                        { icon: Instagram, href: "#" }, 
                        { icon: Linkedin, href: "#" }
                    ].map((social, index) => (
                        <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            className="text-gray-400 hover:text-white transition"
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} MediaBoss. All Rights Reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;