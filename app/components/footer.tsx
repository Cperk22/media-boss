"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">About MediaBoss</h3>
                    <p className="text-gray-400">
                        We deliver cutting-edge media solutions that captivate and inspire audiences worldwide.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/home" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <p>Email: <a href="mailto:contact@mediaboss.com" className="hover:text-white transition">contact@mediaboss.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a></p>
                    <p>Location: Innovation City, CA</p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MediaBoss. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
