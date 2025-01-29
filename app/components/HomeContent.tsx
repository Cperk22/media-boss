"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

const Home = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("Sending free consultation request:", formData);
        console.log(`Free video sent to: ${formData.email}`);

        setIsSubmitted(true);
    };

    return (
        <main className="relative pt-20">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-screen bg-cover bg-center hero-bg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-gray-900 opacity-90"></div>
                <div className="relative text-center px-4 lg:px-0 max-w-4xl">
                    <h1 className="text-7xl font-extrabold text-white leading-tight tracking-widest drop-shadow-lg">
                        Transforming Visions Into Reality
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                        At Media Boss, we deliver innovative media solutions that captivate, inspire, and drive results. Let us bring your vision to life.
                    </p>
                    <div className="mt-10 flex justify-center gap-6">
                        <a
                            href="#services"
                            className="px-12 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
                        >
                            Explore Services
                        </a>
                        <a
                            href="#consultation"
                            className="px-12 py-4 bg-gray-800 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-700 transition"
                        >
                            Request a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section id="services" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-5xl font-bold text-center text-white">
                        Our Services
                    </h2>
                    <p className="text-center text-gray-400 mt-4 text-lg">
                        Customized solutions tailored to meet your brand’s unique needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        {[
                            {
                                title: "Video Production",
                                description:
                                    "Create visually stunning videos that captivate and engage your audience.",
                                image: "/video-production.png",
                            },
                            {
                                title: "Brand Strategy",
                                description:
                                    "Build a cohesive brand identity that resonates with your target audience.",
                                image: "/brand-strategy.png",
                            },
                            {
                                title: "Web Design",
                                description:
                                    "Craft sleek, responsive websites that leave a lasting impression.",
                                image: "/web-design.png",
                            },
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Consultation Section */}
            <section id="consultation" className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">
                        Request a Free Consultation
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Fill out the form below, and we’ll reach out to you. Plus, receive a free video as our gift!
                    </p>
                    {isSubmitted ? (
                        <p className="mt-6 text-lg text-green-500">Thank you! We’ve sent your free video to your email.</p>
                    ) : (
                        <form className="mt-12 max-w-2xl mx-auto" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message (Optional)"
                                    rows={5}
                                    className="w-full px-6 py-4 bg-gray-700 rounded-lg text-white focus:outline-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Hear from those who have experienced the Media Boss difference.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                quote:
                                    "Media Boss exceeded our expectations with their attention to detail and creativity. Our brand has never looked better!",
                                name: "John Smith",
                                company: "Acme Inc.",
                            },
                            {
                                quote:
                                    "The team at Media Boss is fantastic. They took our ideas and turned them into a reality that drives real results.",
                                name: "Jane Doe",
                                company: "TechCorp",
                            },
                            {
                                quote:
                                    "Working with Media Boss was a game changer. Their dedication and expertise are unmatched.",
                                name: "Mike Johnson",
                                company: "Startup Co.",
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                            >
                                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                                <p className="mt-4 font-bold text-white">
                                    {testimonial.name}, {testimonial.company}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-800">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-white">
                        Let’s Bring Your Vision to Life
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Ready to get started? Partner with Media Boss for unparalleled creativity and innovation.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#consultation"
                            className="px-12 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
