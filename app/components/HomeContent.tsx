"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const accordionItemVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
};

const HomeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/video-production.png", text: "GIVE THE PEOPLE WHAT THEY WANT" },
    { image: "/brand-strategy.png", text: "WE ARE FULL IMPACT" },
    { image: "/web-design.png", text: "INNOVATE. DESIGN. INSPIRE." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Accordion items for extra details
  const accordionItems = [
    {
      title: "Search Engine Optimization (SEO)",
      content:
        "Unlock the full potential of your online presence with our advanced SEO strategies. We meticulously optimize your website by enhancing your content, implementing strategic keywords, and refining every technical element to boost your search engine rankings. Our process begins with in-depth analysis, followed by tailored on-page optimizations and continuous performance monitoring to connect you with the right audience.",
    },
    {
      title: "Google Business Profile (GBP) Management",
      content:
        "Optimize your digital storefront with our comprehensive GBP management services for businesses in Colorado Springs. We handle every detail—from profile setup and verification to regular updates and review management—ensuring your business stands out on Google Search and Maps. High-quality images, accurate contact details, and engaging descriptions all contribute to a robust GBP that builds credibility and attracts customers.",
    },
    {
      title: "Paid Advertising",
      content:
        "Maximize your online visibility with targeted paid advertising solutions. We design compelling ad campaigns that position your brand at the top of search results and across relevant platforms. With data-driven insights and continuous campaign optimization, our approach ensures that every dollar spent generates measurable returns.",
    },
    {
      title: "Reputation Management",
      content:
        "Your online reputation is crucial. We take a proactive approach to reputation management by monitoring reviews, engaging with your audience, and promoting positive content. This not only builds trust and credibility but also helps convert prospects into loyal customers.",
    },
    {
      title: "Website Design and Development",
      content:
        "A stunning website is the cornerstone of your digital presence. Our expert designers create visually engaging, mobile-friendly websites that not only reflect your brand identity but are optimized for performance and conversion. Combining innovative design with proven SEO practices, we ensure your site captivates and converts visitors.",
    },
    {
      title: "Social Media Marketing",
      content:
        "Connect with your audience through dynamic social media strategies. We create engaging content and execute targeted campaigns that build brand awareness, foster community engagement, and drive measurable business results across multiple platforms.",
    },
    {
      title: "Complete Marketing Package",
      content:
        "Our complete marketing package integrates web development, SEO, paid advertising, and social media marketing into one cohesive strategy. This holistic approach empowers your business to dominate your local market and achieve sustainable long-term growth.",
    },
    {
      title: "Our Marketing Mission",
      content:
        "At My Media Boss, our mission is to demystify digital marketing and empower your business with innovative, data-driven solutions. We leverage our deep understanding of search engine algorithms, creative design, and targeted advertising to ensure your brand is visible, credible, and competitive.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-900 text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide.image})`, opacity: index === currentSlide ? 1 : 0 }}
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 gradient-animation"></div>
          </motion.div>
        ))}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 key={currentSlide} className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            {slides[currentSlide].text}
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl italic">
            Transforming digital visions into captivating realities.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-bold transition">
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SVG DIVIDER */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z" fill="#111827"></path>
        </svg>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading">About My Media Boss</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body">
            At My Media Boss, we are dedicated to crafting digital experiences that leave a lasting impact. Our expert team blends creativity with the latest technology to deliver bespoke marketing solutions that drive measurable results. We transform your business into a digital powerhouse—combining innovative strategies, cutting-edge design, and data-driven insights to propel you ahead of the competition.
          </p>
          <p className="mt-4 text-gray-300 font-body">
            Whether you are a startup eager to make your mark or an established brand seeking new growth, every campaign is tailored to your unique needs.
          </p>
          <div className="mt-6">
            <Link href="/about" className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-bold transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We offer a comprehensive range of digital marketing services designed to elevate your brand's online presence and drive real results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {slides.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img src={service.image} alt={service.text} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.text}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-bold transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ACCORDION SECTION */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Discover Our Digital Strategies</h2>
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 py-4 text-left font-bold text-xl focus:outline-none bg-gray-700 hover:bg-gray-600 transition flex justify-between items-center"
                >
                  <span>{item.title}</span>
                  <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={accordionItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="px-4 pb-4 text-gray-300"
                    >
                      <p className="text-lg">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING EXPERTISE SECTION */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Digital Marketing Expertise</h2>
          <div className="prose prose-invert prose-lg">
            <h3>Search Engine Optimization (SEO)</h3>
            <p>
              Unlock the full potential of your online presence with our advanced SEO strategies. We meticulously optimize your website by enhancing your content, implementing strategic keywords, and refining every technical element to boost your search engine rankings. Our process begins with in-depth analysis, followed by tailored on-page optimizations and continuous performance monitoring to connect you with the right audience.
            </p>
            <p>
              We believe that SEO is not just about higher rankings—it's about connecting with the right audience. Our team continuously monitors your website's performance using detailed analytics, allowing us to adjust strategies in real time and stay ahead of changing algorithms.
            </p>
            <h3>Google Business Profile (GBP) Management</h3>
            <p>
              Optimize your digital storefront with our comprehensive GBP management services for businesses in Colorado Springs. We handle everything from profile setup and verification to regular updates and review management, ensuring your business stands out on Google Search and Maps.
            </p>
            <h3>Paid Advertising</h3>
            <p>
              Maximize your online visibility with targeted paid advertising solutions. Our data-driven campaigns position your brand at the top of search results and across relevant platforms, driving traffic and boosting conversions.
            </p>
            <h3>Reputation Management</h3>
            <p>
              Your online reputation is crucial. We take a proactive approach to reputation management by monitoring reviews, engaging with customers, and promoting positive content.
            </p>
            <h3>Website Design and Development</h3>
            <p>
              A stunning website is the cornerstone of your digital presence. Our expert web designers create visually engaging, mobile-friendly websites optimized for performance and conversion.
            </p>
            <h3>Social Media Marketing</h3>
            <p>
              Connect with your audience through dynamic social media strategies. We create engaging content and execute targeted campaigns that build brand awareness and drive engagement.
            </p>
            <h3>Complete Marketing Package</h3>
            <p>
              In today's digital world, a comprehensive marketing strategy is essential. Our complete marketing package integrates web development, SEO, paid advertising, and social media into one cohesive approach.
            </p>
            <h3>Our Marketing Mission</h3>
            <p>
              At My Media Boss, our mission is to demystify digital marketing and empower your business with innovative, data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Take the first step toward a dominant online presence with our cutting-edge digital marketing solutions.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-bold transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
