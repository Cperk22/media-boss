"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">About Media Boss</h3>
                        <p className="text-gray-400">
                            Media Boss is dedicated to delivering innovative media solutions that captivate, inspire, and drive results. Let us help you bring your vision to life.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="hover:text-white transition">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" legacyBehavior>
                                    <a className="hover:text-white transition">Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#consultation" legacyBehavior>
                                    <a className="hover:text-white transition">Free Consultation</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" legacyBehavior>
                                    <a className="hover:text-white transition">Testimonials</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <p className="text-gray-400">
                            Email: <a href="mailto:contact@mediaboss.com" className="hover:text-white transition">contact@mediaboss.com</a>
                        </p>
                        <p className="text-gray-400 mt-2">
                            Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
                        </p>
                        <p className="text-gray-400 mt-2">
                            Address: 123 Media Boss Lane, Innovation City, CA 90210
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm text-gray-500">&copy; 2025 Media Boss. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
