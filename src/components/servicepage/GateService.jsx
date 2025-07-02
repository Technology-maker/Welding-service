import React from 'react'
import Navbar from '../Navbar';
import Trust from './Trust';
import Contact from '../Contact.jsx';
import Footer from '../Footer.jsx'
import Gate1 from '../../assets/gates/gate1.jpeg';
import Gate2 from '../../assets/gates/gate2.jpeg';
import Gate3 from '../../assets/gates/gate3.jpeg';
import Gate4 from '../../assets/gates/gate4.jpeg';
import Gate5 from '../../assets/gates/gate5.jpeg';
import Gate6 from '../../assets/gates/gate6.jpeg';
import Gate7 from '../../assets/gates/gate7.jpeg';
import Gate8 from '../../assets/gates/gate8.jpeg';
import Gate9 from '../../assets/gates/gate9.jpeg';
import Gate10 from '../../assets/gates/gate10.jpeg';
import Gate11 from '../../assets/gates/gate11.jpeg';
import Gate12 from '../../assets/gates/gate12.jpeg';
import Gate13 from '../../assets/gates/gate13.jpeg';
import Gate14 from '../../assets/gates/gate14.jpeg';
import Gate15 from '../../assets/gates/gate15.jpeg';
import Gate16 from '../../assets/gates/gate16.jpeg';
import Gate17 from '../../assets/gates/gate17.jpeg';
import Gate18 from '../../assets/gates/gate18.jpeg';
import Gate19 from '../../assets/gates/gate19.jpeg';
import Gate20 from '../../assets/gates/gate20.jpeg';

const gateImages = [
    Gate1, Gate2, Gate3, Gate4, Gate5, Gate6, Gate7, Gate8, Gate9, Gate10,
    Gate11, Gate12, Gate13, Gate14, Gate15, Gate16, Gate17, Gate18, Gate19, Gate20
];

// Array of lines/descriptions
const gateLines = [
    "Elegant main gate design.",
    "Heavy-duty security gate.",
    "Modern look for your home.",
    "Classic iron craftsmanship.",
    "Rust-resistant finish.",
    "Custom patterns available.",
    "Perfect for villas & offices.",
    "Trusted by hundreds of clients.",
    "Low maintenance, high value.",
    "Engineered for Indian climate."
];

const GateService = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center min-h-[70vh] bg-gradient-to-b from-gray-100 to-gray-200 px-2 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center animate-fade-in-down">Our Gate Services</h1>
                <div className="max-w-2xl text-center mb-8">
                    <p className="text-gray-700 mb-2">
                        We create strong and stylish metal gates for every need—installation, repair, or custom design.
                    </p>
                    <ul className="text-gray-600 text-sm mb-2 list-inside ">
                        <li>✨ Choose from many designs or share your own idea</li>
                        <li>💵 Pricing depends on design, materials, and weight</li>
                        <li>📞 <b>Contact us today for a free consultation!</b></li>
                    </ul>
                </div>
                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {gateImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition group animate-fade-in"
                                style={{ animationDelay: `${idx * 0.07}s` }}
                            >
                                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-2 border border-gray-200 group-hover:border-orange-400 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                                    <img
                                        src={img}
                                        alt={`Gate ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-gray-500 text-xs text-center">{gateLines[idx % gateLines.length]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Trust />
            <Contact />
            <Footer />
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

export default GateService;