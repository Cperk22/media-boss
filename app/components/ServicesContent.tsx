"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const services = [
    { title: "Video Production", description: "High-quality video content to captivate your audience.", image: "/video-production.png" },
    { title: "Brand Strategy", description: "We create powerful brand narratives that drive engagement.", image: "/brand-strategy.png" },
    { title: "Web Design", description: "Sleek, responsive websites tailored to your brand.", image: "/web-design.png" },
    { title: "Social Media Marketing", description: "Engage with your audience through data-driven campaigns.", image: "/social-media.png" },
    { title: "Photography", description: "Stunning visuals that tell a compelling story.", image: "/photography.png" },
    { title: "Content Creation", description: "Impactful storytelling through diverse media formats.", image: "/content-creation.png" }
];

const ServicesContent = () => {
    return (
        <main className="relative pt-20 overflow-hidden">
            {/* Hero Section */}
            <motion.section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/services-hero.jpg')" }}
                initial="hidden" animate="visible" variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.h1 className="text-7xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
                        Our Services
                    </motion.h1>
                    <p className="mt-6 text-2xl text-gray-300 max-w-3xl mx-auto">
                        Tailored media solutions designed to elevate your brand.
                    </p>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <Image src="/services-background.jpg" alt="Services Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-15" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-6xl font-extrabold text-white">What We Offer</h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
                        We provide a range of services to help your brand stand out in the digital landscape.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
                        {services.map((service, index) => (
                            <motion.div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                                <Image src={service.image} alt={service.title} width={400} height={200} className="w-full h-52 object-cover rounded-lg mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section className="py-32 bg-black text-center relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <Image src="/cta-background.jpg" alt="CTA Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-10" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-6xl font-extrabold text-white">Let’s Work Together</h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to take your brand to the next level? Let’s create something extraordinary together.
                    </p>
                    <div className="mt-10">
                        <motion.a href="/contact" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-110">
                            Get in Touch
                        </motion.a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default ServicesContent;
