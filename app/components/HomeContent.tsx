"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
    { image: "/video-production.png", text: "GIVE THE PEOPLE WHAT THEY WANT" },
    { image: "/brand-strategy.png", text: "WE ARE FULL IMPACT" },
    { image: "/web-design.png", text: "INNOVATE. DESIGN. INSPIRE." }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const HomeContent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative pt-20 overflow-hidden">
            {/* Hero Slider Section */}
            <section className="relative h-screen w-full flex items-center justify-center">
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                        style={{ backgroundImage: `url(${slide.image})`, opacity: index === currentSlide ? 1 : 0 }}
                    />
                ))}
                <motion.div className="relative z-10 text-center px-6 max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <motion.h1
                        key={currentSlide}
                        className="text-7xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg"
                    >
                        {slides[currentSlide].text}
                    </motion.h1>
                </motion.div>
            </section>

            {/* About Section */}
            <motion.section id="about" className="py-32 bg-gray-900 text-center relative overflow-hidden"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <Image src="/about-background.png" alt="About Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-20" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-6xl font-extrabold text-white">About Us</h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
                        We are Media Boss, a premier media solutions provider dedicated to crafting engaging, high-quality digital experiences.
                    </p>
                    <div className="mt-8">
                        <Link href="/about" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                            Learn More
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section id="services" className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center relative overflow-hidden"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <Image src="/services-background.png" alt="Services Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-15" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-6xl font-extrabold text-white">Our Services</h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
                        We provide high-quality services to enhance your brand’s digital presence.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                        {slides.map((service, index) => (
                            <motion.div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                                <Image src={service.image} alt={service.text} width={400} height={200} className="w-full h-52 object-cover rounded-lg mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-3">{service.text}</h3>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link href="/services" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                            View All Services
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section id="contact" className="py-32 bg-black text-center relative overflow-hidden"
                initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
                <Image src="/contact-background.png" alt="Contact Background" layout="fill" objectFit="cover" className="absolute inset-0 opacity-10" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-6xl font-extrabold text-white">Get in Touch</h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind? Let's bring your vision to life.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-110">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default HomeContent;
