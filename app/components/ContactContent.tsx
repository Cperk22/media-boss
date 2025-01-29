"use client";

import React from "react";

const ContactContent = () => {
    return (
        <main className="relative pt-20 text-center text-white">
            {/* Contact Hero Section */}
            <section className="bg-cover bg-center h-96 flex items-center justify-center hero-bg">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-6xl font-extrabold tracking-wide">Get In Touch</h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions or want to start a project? Reach out to us today!
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-5xl font-bold">Contact Us</h2>
                    <form className="mt-8 max-w-2xl mx-auto space-y-6">
                        <input type="text" name="name" placeholder="Your Name" className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none" required />
                        <input type="email" name="email" placeholder="Your Email" className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none" required />
                        <textarea name="message" placeholder="Your Message" rows={5} className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none"></textarea>
                        <button type="submit" className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold">Reach Us Directly</h2>
                    <p className="text-gray-400 mt-4 text-lg">We are here to assist you with all your media needs.</p>
                    <div className="mt-8">
                        <p>Email: <a href="mailto:contact@mediaboss.com" className="hover:text-white transition">contact@mediaboss.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a></p>
                        <p>Location: Innovation City, CA</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactContent;
