"use client";

import React from "react";

const About = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white font-sans min-h-screen flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-24">
                <h1 className="text-5xl font-extrabold mb-6">About Media Boss</h1>
                <p className="text-xl text-gray-300 mb-12">
                    At Media Boss, we pride ourselves on delivering exceptional media solutions tailored to your brand’s unique
                    needs. Our team of creative professionals is dedicated to helping you achieve your goals through innovative
                    storytelling, cutting-edge technology, and unparalleled attention to detail.
                </p>

                {/* Team Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Emily Carter",
                                role: "Creative Director",
                                image: "/images/team-emily.jpg",
                                description:
                                    "Emily is the visionary behind our creative projects, ensuring every concept comes to life with stunning visuals and impactful storytelling.",
                            },
                            {
                                name: "James Anderson",
                                role: "Technical Lead",
                                image: "/images/team-james.jpg",
                                description:
                                    "James drives our technical excellence, bringing innovative solutions to even the most complex media challenges.",
                            },
                            {
                                name: "Sophia Bennett",
                                role: "Marketing Strategist",
                                image: "/images/team-sophia.jpg",
                                description:
                                    "Sophia connects your brand with your audience through tailored marketing strategies that deliver real results.",
                            },
                        ].map((member, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-blue-500 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-300 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision and Mission Section */}
                <div className="mt-24">
                    <h2 className="text-4xl font-bold mb-8">Our Vision and Mission</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Our vision is to revolutionize how brands connect with their audience by creating impactful media that leaves
                        a lasting impression. We aim to empower businesses with the tools they need to tell their stories and achieve
                        their full potential.
                    </p>
                    <p className="text-lg text-gray-300">
                        At Media Boss, we believe in collaboration, creativity, and innovation as the pillars of success. Our mission
                        is to be your trusted partner in bringing your ideas to life.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-16">
                    <a
                        href="#contact"
                        className="px-12 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
