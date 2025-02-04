"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const serviceCards = [
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

const accordionItems = [
  {
    title: "Search Engine Optimization (SEO)",
    content:
      "Unlock the full potential of your online presence with our search engine advertising. We meticulously optimize your website, enhance content, and implement strategic keywords. Our comprehensive approach includes technical audits, on-page optimization, and continuous monitoring to ensure your site remains at the forefront of organic search results.",
  },
  {
    title: "Google Business Profile (GBP) Management",
    content:
      "Optimize your digital storefront with our GBP management in Colorado Springs. We handle everything from setting up your profile to implementing robust SEO strategies, ensuring that your business stands out on Google Maps and in local search results.",
  },
  {
    title: "Paid Advertising",
    content:
      "Maximize your online visibility with targeted paid advertising campaigns. Our strategies position your brand at the top of search results and on relevant platforms, driving traffic and conversions with measurable results.",
  },
  {
    title: "Reputation Management",
    content:
      "Build trust and credibility with proactive reputation management. We monitor online reviews, engage with customers, and promote positive content to ensure your brand is viewed in the best possible light.",
  },
  {
    title: "Website Design and Development",
    content:
      "Our expert web designers create visually stunning, user-friendly websites that not only reflect your brand identity but are optimized for performance and conversion. By combining sleek design with best SEO practices, we ensure your website stands out.",
  },
  {
    title: "Social Media Marketing",
    content:
      "Connect with your audience through dynamic social media strategies. We create engaging content, manage your online presence, and run targeted campaigns to increase brand awareness and drive measurable business results.",
  },
  {
    title: "Complete Marketing Package",
    content:
      "Our complete marketing package integrates web development, SEO, paid advertising, and social media marketing into one cohesive strategy. Dominate your local market and achieve sustainable growth with our comprehensive approach.",
  },
  {
    title: "Our Marketing Mission",
    content:
      "At My Media Boss, our mission is to demystify digital marketing and empower your business to succeed online. We leverage data-driven strategies and innovative solutions to ensure your brand is visible, credible, and competitive in today's digital landscape.",
  },
];

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-gray-700">
    <button onClick={onClick} className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
      <span className="text-xl font-bold">{title}</span>
      <span className="text-2xl">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && <div className="pb-4 text-gray-300">{content}</div>}
  </div>
);

const ServicesContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Innovative solutions to elevate your digital presence.
          </p>
        </motion.div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg hover:shadow-2xl transition transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Accordion Section */}
      <section className="py-16 bg-gray-900 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Detailed Service Information</h2>
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/contact" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-bold transition">
              Contact Us for a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesContent;
