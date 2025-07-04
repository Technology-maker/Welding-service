import React from 'react'
import Navbar from '../Navbar'
import Trust from './Trust'
import Contact from '../Contact.jsx'
import Footer from '../Footer.jsx'
import Img1 from '../../assets/othersimg/banch1.jpg'
import Img2 from '../../assets/othersimg/banch2.jpg'
import Img3 from '../../assets/othersimg/banch3.jpg'
import Img4 from '../../assets/othersimg/bqnch4.jpg'
import Img5 from '../../assets/othersimg/chair1.jpg'
import Img6 from '../../assets/othersimg/chair2.jpg'
import Img7 from '../../assets/othersimg/chair3.jpg'
import Img8 from '../../assets/othersimg/stand1.jpg'
import Img9 from '../../assets/othersimg/stand2.jpg'
import Img10 from '../../assets/othersimg/stand3.jpg'
import Img11 from '../../assets/othersimg/stand4.webp'
import Img12 from '../../assets/othersimg/stand5.jpg'

const Images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12,
]

// More relevant lines for "other services"
const otherLines = [
    "Durable metal bench for parks & gardens.",
    "Elegant seating for public spaces.",
    "Custom-designed metal furniture.",
    "Weather-resistant outdoor chairs.",
    "Modern and sturdy metal stands.",
    "Perfect for schools and offices.",
    "Trusted by institutions & businesses.",
    "Low maintenance, high durability.",
    "Expert craftsmanship guaranteed.",
    "Engineered for Indian conditions.",
    "Unique designs for every need.",
    "Quality you can rely on."
]

const OtherSarvices = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center min-h-[70vh] bg-gradient-to-b from-gray-100 to-gray-200 px-2 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center animate-fade-in-down">
                    Other Metal Fabrication Services
                </h1>
                <div className="max-w-2xl text-center mb-8">
                    <p className="text-gray-700 mb-2">
                        Explore our range of custom metal benches, chairs, stands, and more. We deliver quality, durability, and unique designs for every requirement.
                    </p>
                    <ul className="text-gray-600 text-sm mb-2 list-inside">
                        <li>✨ Choose from many designs or share your own idea</li>
                        <li>💵 Pricing depends on design, materials, and size</li>
                        <li>📞 <b>Contact us today for a free consultation!</b></li>
                    </ul>
                </div>
                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {Images.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition group animate-fade-in"
                                style={{ animationDelay: `${idx * 0.07}s` }}
                            >
                                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-2 border border-gray-200 group-hover:border-blue-400 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                                    <img
                                        src={img}
                                        alt={`Other Service ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-gray-500 text-xs text-center">{otherLines[idx % otherLines.length]}</span>
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

export default OtherSarvices