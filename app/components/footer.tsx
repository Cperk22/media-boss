"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">
            Media<span className="text-purple-500">Boss</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Elevating brands with cutting-edge media solutions. Let’s create something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Contact</h3>
          <p className="mt-4 text-gray-300">123 Media Street, Suite 400</p>
          <p className="text-gray-300">Los Angeles, CA 90001</p>
          <p className="mt-2 text-gray-300">Email: contact@mediaboss.com</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="social-icon">
              <FaFacebookF />
            </Link>
            <Link href="#" className="social-icon">
              <FaTwitter />
            </Link>
            <Link href="#" className="social-icon">
              <FaInstagram />
            </Link>
            <Link href="#" className="social-icon">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} MediaBoss. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
