import React from 'react'
import Navbar from '../Navbar'
import Trust from './Trust'
import Contact from '../Contact'
import Footer from '../Footer.jsx'
import Img1 from '../../assets/stairs_grills/img1.jpeg'
import Img2 from '../../assets/stairs_grills/img2.jpeg'
import Img3 from '../../assets/stairs_grills/img3.jpeg'
import Img4 from '../../assets/stairs_grills/img4.jpeg'
import Img5 from '../../assets/stairs_grills/img5.jpeg'
import Img6 from '../../assets/stairs_grills/img6.jpeg'
import Img7 from '../../assets/stairs_grills/img7.jpeg'
import Img8 from '../../assets/stairs_grills/img8.jpeg'
import Img9 from '../../assets/stairs_grills/img9.jpeg'
import Img10 from '../../assets/stairs_grills/img10.jpeg'
import Img11 from '../../assets/stairs_grills/img11.jpeg'
import Img12 from '../../assets/stairs_grills/img12.jpeg'

const grillImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12
]

const grillLines = [
    "Modern railing design.",
    "Strong and secure grills.",
    "Elegant staircase solution.",
    "Custom patterns available.",
    "Rust-proof finish.",
    "Perfect for balconies.",
    "Trusted by many clients.",
    "Low maintenance, high value.",
    "Expert installation.",
    "Engineered for safety.",
]

const Grillsservice = () => {
    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-[80vh] px-2 py-8 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center animate-fade-in-down">
                    Railing & Grills Projects
                </h1>
                <p className="text-gray-700 text-center max-w-2xl mb-8 animate-fade-in-up">
                    Explore our range of custom railings and grills for stairs, balconies, and more. We deliver stylish, safe, and durable solutions for every space.
                </p>
                <ul className="text-gray-600 text-sm mb-2 list-inside">
                    <li>✨ Choose from many designs or share your own idea</li>
                    <li>💵 Pricing depends on design, materials, and size</li>
                    <li>📞 <b>Contact us today for a free consultation!</b></li>
                </ul>
                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {grillImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition group animate-fade-in"
                                style={{ animationDelay: `${idx * 0.07}s` }}
                            >
                                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-2 border border-gray-200 group-hover:border-orange-400 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                                    <img
                                        src={img}
                                        alt={`Grill ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-gray-500 text-xs text-center">{grillLines[idx % grillLines.length]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Trust />
                <Contact />
                <Footer />
            </section>
            <style>
                {`
                .animate-fade-in {
                  opacity: 0;
                  transform: translateY(20px) scale(0.98);
                  animation: fadeIn 0.7s forwards;
                }
                .animate-fade-in-down {
                  opacity: 0;
                  transform: translateY(-20px);
                  animation: fadeIn 0.7s forwards;
                }
                .animate-fade-in-up {
                  opacity: 0;
                  transform: translateY(20px);
                  animation: fadeIn 0.7s forwards;
                }
                @keyframes fadeIn {
                  to {
                    opacity: 1;
                    transform: none;
                  }
                }
                `}
            </style>
        </>
    )
}

export default Grillsservice