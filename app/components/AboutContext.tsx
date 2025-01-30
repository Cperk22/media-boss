"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const coreValues = [
    { title: "Creativity", description: "We believe in pushing creative boundaries to deliver exceptional media solutions.", image: "/values/creativity.jpg" },
    { title: "Innovation", description: "Embracing cutting-edge technology and ideas to drive forward-thinking strategies.", image: "/values/innovation.jpg" },
    { title: "Excellence", description: "Delivering top-tier quality in every project we undertake.", image: "/values/excellence.jpg" }
];

const teamMembers = [
    { name: "John Doe", role: "Founder & CEO", image: "/team/john.jpg", bio: "John is a visionary leader with over 15 years of experience in media production." },
    { name: "Jane Smith", role: "Creative Director", image: "/team/jane.jpg", bio: "Jane brings creativity and strategic thinking to elevate brands." },
    { name: "Mike Johnson", role: "Head of Marketing", image: "/team/mike.jpg", bio: "Mike's expertise in digital marketing ensures impactful campaigns." },
    { name: "Emily White", role: "Lead Designer", image: "/team/emily.jpg", bio: "Emily crafts visually stunning designs that captivate audiences." }
];

const About = () => {
    return (
        <main className="relative pt-20 overflow-hidden bg-gray-900 text-white">
            {/* Hero Section */}
            <motion.section className="text-center py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg"
                initial="hidden" animate="visible" variants={fadeInUp}
            >
                <h1 className="text-7xl font-extrabold leading-tight tracking-wide text-white drop-shadow-lg animate-pulse">
                    Who We Are
                </h1>
                <p className="mt-6 text-2xl text-gray-100 max-w-3xl mx-auto animate-fade-slide">
                    The driving force behind innovative media solutions that captivate, inspire, and redefine engagement.
                </p>
            </motion.section>

            {/* Mission Section */}
            <motion.section className="py-32 text-center bg-gray-800 rounded-xl shadow-xl mx-6 lg:mx-12 mt-16 hover:shadow-2xl transform hover:scale-105 transition duration-500"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <h2 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg">Our Mission</h2>
                <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-slide">
                    At MediaBoss, our mission is to push the boundaries of creativity, helping brands connect with their audiences in the most impactful way.
                </p>
            </motion.section>

            {/* Values Section */}
            <motion.section className="py-32 text-center bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-xl shadow-xl mx-6 lg:mx-12 mt-16 hover:shadow-2xl transform hover:scale-105 transition duration-500"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <h2 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    {coreValues.map((value, index) => (
                        <motion.div key={index} className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-110 text-center border border-blue-500 animate-fade-slide"
                            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                            <Image src={value.image} alt={value.title} width={100} height={100} className='w-24 h-24 mx-auto mb-4 rounded-full' />
                            <h3 className='text-3xl font-bold text-white mb-3 animate-pulse'>{value.title}</h3>
                            <p className="text-gray-300">We believe in {value.description} to drive forward-thinking strategies and impactful results.</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section className="py-32 text-center bg-gray-800 rounded-xl shadow-xl mx-6 lg:mx-12 mt-16 hover:shadow-2xl transform hover:scale-105 transition duration-500"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <h2 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg animate-fade-slide">Meet the Team</h2>
                <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-slide">
                    Our dedicated professionals bring expertise and passion to every project, ensuring outstanding results for our clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-110 text-center border border-blue-500 animate-fade-slide"
                            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                            <Image src={member.image} alt={member.name} width={200} height={200} className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-400 animate-pulse" />
                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-blue-300 font-medium">{member.role}</p>
                            <p className="text-gray-300 mt-3">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
};

export default About;
