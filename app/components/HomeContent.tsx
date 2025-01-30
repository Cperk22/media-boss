"use client";

import React from "react";
import Link from "next/link";

const HomeContent = () => {
    return (
        <main className="relative pt-20">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center hero-bg text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-gray-900 opacity-90"></div>
                <div className="relative max-w-4xl px-6 lg:px-0">
                    <h1 className="text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
                        Transforming Visions Into Reality
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                        Cutting-edge media solutions that captivate, inspire, and drive results.
                    </p>
                    <div className="mt-10 flex justify-center gap-6">
                        <Link href="/services" className="px-12 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition">
                            Explore Services
                        </Link>
                        <Link href="/contact" className="px-12 py-4 bg-gray-800 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-700 transition">
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">Our Services</h2>
                    <p className="text-gray-400 mt-4 text-lg">Crafted to meet your brand’s unique needs.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {[
                            {
                                title: "Video Production",
                                description: "High-quality video content that tells your brand's story.",
                                image: "/video-production.png"
                            },
                            {
                                title: "Brand Strategy",
                                description: "Developing a strong brand identity to connect with your audience.",
                                image: "/brand-strategy.png"
                            },
                            {
                                title: "Web Design",
                                description: "Creating sleek, responsive websites to enhance your online presence.",
                                image: "/web-design.png"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomeContent;
