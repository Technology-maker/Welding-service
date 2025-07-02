import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-6 px-4 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold text-orange-400">Shree Vinayak Fabrication</h2>
                    <p className="text-sm mt-1">Quality Metalwork & Welding Services</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <a href="tel:+919352391913" className="hover:text-orange-400 transition text-sm">📞 +91 9352391913</a>
                    <a href="mailto:ajaywelder9352@gmail.com" className="hover:text-orange-400 transition text-sm">✉️ ajaywelder9352@gmail.com.com</a>
                    <a href="https://maps.app.goo.gl/wDPNd8vmBghreMAW9" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition text-sm">📍 Location</a>
                </div>
                <div className="text-xs text-center md:text-right text-gray-400 mt-2 md:mt-0">
                    &copy; {new Date().getFullYear()} Shree Vinayak Fabrication. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;