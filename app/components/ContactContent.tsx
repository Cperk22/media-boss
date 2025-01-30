"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactContent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-b from-purple-700 via-purple-900 to-black text-white text-center px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
          <h1 className="text-7xl font-extrabold tracking-wide">Get in Touch</h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Have a project in mind? **Let’s bring your vision to life.**
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-black text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold text-purple-400">Let's Connect</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            Fill out the form below or **reach out directly** through our contact details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              {isSubmitted ? (
                <p className="text-lg text-green-400">Thank you! We will get back to you shortly.</p>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-12 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-purple-400 mb-6">Our Contact Information</h3>
              <p className="text-gray-300 mb-4">
                📍 **Address:** 123 Media Boss Blvd, New York, NY 10001
              </p>
              <p className="text-gray-300 mb-4">
                📧 **Email:** <a href="mailto:info@mediaboss.com" className="text-purple-400 hover:underline">info@mediaboss.com</a>
              </p>
              <p className="text-gray-300 mb-4">
                📞 **Phone:** <a href="tel:+11234567890" className="text-purple-400 hover:underline">+1 (123) 456-7890</a>
              </p>
              <p className="text-gray-300">
                💼 **Business Hours:** Mon - Fri, 9 AM - 6 PM EST
              </p>
            </motion.div>
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
          <h2 className="text-6xl font-extrabold">Let's Build Something Great</h2>
          <p className="text-xl text-white mt-6 leading-relaxed">
            We are ready to take your brand to the next level. Contact us today!
          </p>
          <div className="mt-10">
            <a
              href="mailto:info@mediaboss.com"
              className="px-12 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-110"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactContent;
