"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AboutContent = () => {
  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-black text-white text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl"
        >
          <h1 className="text-7xl font-extrabold tracking-wide text-purple-500">
            Meet MediaBoss
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            We are a **cutting-edge media company**, pushing the **boundaries of creativity** 
            and **innovation** to deliver extraordinary brand experiences.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-gray-900 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold text-purple-400">Our Mission</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            Our mission is to **redefine brand storytelling** through **stunning visuals, 
            compelling narratives, and innovative strategies** that captivate audiences.
          </p>
          <div className="border-t border-gray-700 my-16"></div>
          <h2 className="text-6xl font-extrabold text-purple-400">Our Vision</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            We envision a world where **brands connect with their audiences** on a deeper 
            level, using media as a powerful tool for impact, engagement, and growth.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold text-purple-400">Our Core Values</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            We are **driven by values** that inspire creativity, foster growth, and shape 
            a culture of **excellence** in everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: "Innovation", description: "We push creative boundaries to stay ahead.", img: "/innovation.png" },
              { title: "Integrity", description: "We build trust through transparency and excellence.", img: "/integrity.png" },
              { title: "Collaboration", description: "Great ideas come from working together.", img: "/collaboration.png" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <Image
                  src={value.img}
                  alt={value.title}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-3xl font-bold mt-6 text-purple-400">{value.title}</h3>
                <p className="text-gray-300 mt-4">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-900 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-6xl font-extrabold text-purple-400">Meet Our Team</h2>
          <p className="text-xl text-gray-300 mt-6 leading-relaxed">
            Our team of **passionate creatives** and **strategic thinkers** is dedicated to 
            delivering **exceptional media solutions** that leave a lasting impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { name: "John Doe", role: "CEO", img: "/team1.jpg", bio: "John brings years of leadership and vision, driving the company forward." },
              { name: "Jane Smith", role: "Creative Director", img: "/team2.jpg", bio: "Jane crafts visually stunning media strategies that inspire." },
              { name: "Mark Johnson", role: "Lead Developer", img: "/team3.jpg", bio: "Mark leads innovation with cutting-edge technology." },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
                <h3 className="text-2xl font-bold mt-6 text-purple-400">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <p className="text-gray-300 mt-4">{member.bio}</p>
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
          <h2 className="text-6xl font-extrabold">Let’s Create Something Amazing</h2>
          <p className="text-xl text-white mt-6 leading-relaxed">
            Connect with us today and let’s bring your brand’s vision to life.
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

export default AboutContent;
