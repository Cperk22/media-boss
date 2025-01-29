"use client";

import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";

import { usePathname } from "next/navigation";

const MainPage = () => {
    const pathname = usePathname();

    const renderPage = () => {
        switch (pathname) {
            case "/about":
                return <About />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white font-sans min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default MainPage;
