import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '/navlogo/logo1.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    // Navigation links
    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#service", label: "Services" },
        { href: "#products", label: "Products" },
        { href: "#contact", label: "Contact" }
    ]

    return (
        <nav className="bg-[#5f4c4c] text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            className="h-14 w-14 rounded-full object-cover bg-white  p-1 shadow"
                            src={Logo}
                            alt="Shree Vinayak"
                        />
                        <span className="font-bold text-lg tracking-wide">Shree Vinayak</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 font-medium">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-orange-400 transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="tel:+919352391913"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                        >
                            Call Now!
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#4c3c3c] z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} aria-label="Close menu">
                        <FaTimes size={28} className="text-white hover:text-orange-400 transition" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full py-10 space-y-6 -mt-16">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="block text-lg font-semibold hover:text-orange-400 transition"
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:+919352391913"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
                        onClick={toggleMenu}
                    >
                        Call Now!
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar