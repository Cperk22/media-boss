"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Rotating headlines
const headlines = [
  "Captivate. Engage. Dominate.",
  "Unleashing Creativity, One Frame at a Time.",
  "Building Digital Empires with Precision.",
  "We Tell Stories That Inspire Action."
];

// Hero Section Background Slider
const slides = [
  { image: "/video-production.png" },
  { image: "/brand-strategy.png" },
  { image: "/web-design.png" }
];

// Services section content
const services = [
  { title: "SEO", description: "Unlock your full online potential with strategic search engine optimization.", image: "/seo.png" },
  { title: "Google Business Profile", description: "Enhance your digital storefront and local rankings on Google Maps.", image: "/gbp.png" },
  { title: "Paid Ads", description: "Maximize visibility with targeted, high-converting ad campaigns.", image: "/paid-ads.png" },
  { title: "Reputation Management", description: "Boost credibility and manage your brand perception online.", image: "/reputation.png" },
  { title: "Website Design", description: "Create sleek, modern, and user-friendly websites for your brand.", image: "/web-design.png" },
  { title: "Social Media Marketing", description: "Engage your audience and grow your brand on social media platforms.", image: "/social-media.png" }
];

const HomeContent = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white bg-black">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide.image})`, opacity: index === currentSlide ? 1 : 0 }}
          />
        ))}
        {/* Dark Overlay to make text stand out */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div className="relative z-10 max-w-4xl">
          <motion.h1
            key={currentHeadline}
            className="text-7xl font-extrabold tracking-wide drop-shadow-lg transition-opacity duration-700"
          >
            {headlines[currentHeadline]}
          </motion.h1>
          <p className="mt-4 text-xl text-gray-200">Innovative media solutions for brands that demand attention.</p>
          <div className="mt-6 flex justify-center space-x-6">
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/contact" className="btn btn-secondary">Get a Free Consultation</Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section className="py-32 bg-gray-900 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: false }} transition={{ duration: 0.7 }}>
        <h2 className="text-6xl font-extrabold text-white">Our Expertise</h2>
        <p className="text-gray-400 mt-6 text-xl">We bring brands to life with high-impact digital solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {services.map((service, index) => (
            <motion.div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}>
              <Image src={service.image} alt={service.title} width={400} height={200} className="w-full h-52 object-cover rounded-lg mb-6" />
              <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section (Replacing Proven Results) */}
      <motion.section className="py-32 bg-black text-center text-white"
        initial="hidden" whileInView="visible" viewport={{ once: false }} transition={{ duration: 0.7 }}>
        <h2 className="text-6xl font-extrabold">Why Choose Media Boss?</h2>
        <p className="text-xl text-gray-300 mt-4">
          We are not just a marketing agency – we are your brand's strategic partner in success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {[
            { title: "Tailored Strategies", desc: "We create custom marketing plans designed for your specific needs." },
            { title: "Cutting-Edge Innovation", desc: "We stay ahead of trends to keep your brand competitive." },
            { title: "Customer-First Approach", desc: "Your success is our priority, and we work to exceed expectations." }
          ].map((item, index) => (
            <motion.div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-bold text-purple-400">{item.title}</h3>
              <p className="text-gray-300 mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section className="py-32 bg-purple-700 text-white text-center"
        initial="hidden" whileInView="visible" viewport={{ once: false }} transition={{ duration: 0.7 }}>
        <h2 className="text-6xl font-extrabold">Let’s Build Something Great</h2>
        <p className="text-xl mt-6">Contact us today to transform your brand.</p>
        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </motion.section>
    </main>
  );
};

export default HomeContent;
