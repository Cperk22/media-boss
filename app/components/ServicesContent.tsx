"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const services = [
  {
    title: "Video Production",
    description: "Crafting cinematic experiences that captivate and inspire your audience.",
    image: "/video-production.png",
  },
  {
    title: "Brand Strategy",
    description: "Creating powerful brand narratives that leave a lasting impact.",
    image: "/brand-strategy.png",
  },
  {
    title: "Web Design",
    description: "Building sleek, modern websites optimized for performance and engagement.",
    image: "/web-design.png",
  },
  {
    title: "Social Media Management",
    description: "Boosting brand presence and engagement across all social platforms.",
    image: "/social-media.png",
  },
  {
    title: "Content Marketing",
    description: "Developing high-quality, targeted content to drive customer engagement.",
    image: "/content-marketing.png",
  },
  {
    title: "Advertising & Paid Media",
    description: "Strategic ad placements to maximize reach and ROI.",
    image: "/paid-media.png",
  },
];

const ServicesContent = () => {
  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-black text-white text-center px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
          <h1 className="text-7xl font-extrabold tracking-wide text-purple-500">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            We provide innovative solutions tailored to elevate your brand's **digital presence** and **engagement**.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold text-purple-400">What We Offer</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            Our comprehensive services are designed to **enhance your brand's visibility, engagement, and success.**
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <Image src={service.image} alt={service.title} width={400} height={200} className="w-full h-52 object-cover rounded-lg mb-6" />
                <h3 className="text-3xl font-bold text-purple-400 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-purple-600 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-white mt-6 leading-relaxed">
            Let’s collaborate and create something truly remarkable.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="px-12 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-110"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ServicesContent;
