"use client";

import React from "react";

const AboutContent = () => {
    return (
        <main className="relative pt-20 text-center text-white">
            {/* About Hero Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center hero-bg">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-6xl font-extrabold tracking-wide">Who We Are</h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Media Boss is a leading media solutions company, dedicated to crafting engaging, impactful, and innovative digital experiences.
                    </p>
                </div>
            </section>

            {/* Our Mission and Vision */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-5xl font-bold">Our Mission</h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                        To revolutionize media engagement by providing world-class solutions that drive results and foster deep connections.
                    </p>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-5xl font-bold">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {["Emily Carter - CEO", "James Anderson - Creative Director", "Sophia Bennett - Marketing Head"].map((member, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <h3 className="text-2xl font-bold text-white mb-2">{member.split(" - ")[0]}</h3>
                                <p className="text-blue-500 font-medium">{member.split(" - ")[1]}</p>
                                <p className="text-gray-300 mt-2">Experienced leader driving innovation in media and marketing.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">Join Our Journey</h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Be part of our mission to create outstanding digital experiences. Get in touch today!
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

export default AboutContent;
