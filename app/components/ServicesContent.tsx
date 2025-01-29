"use client";

import React from "react";

const ServicesContent = () => {
    return (
        <main className="relative pt-20 text-center text-white">
            {/* Services Hero Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center hero-bg">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-6xl font-extrabold tracking-wide">Our Services</h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        We provide cutting-edge media solutions tailored to your brand’s needs.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-5xl font-bold">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {[
                            {
                                title: "Video Production",
                                description: "High-quality video content that tells your brand's story.",
                            },
                            {
                                title: "Brand Strategy",
                                description: "Developing a strong brand identity to connect with your audience.",
                            },
                            {
                                title: "Web Design",
                                description: "Creating sleek, responsive websites to enhance your online presence.",
                            },
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">Let's Create Something Amazing</h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Ready to elevate your brand with our expert services? Get in touch today!
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesContent;
