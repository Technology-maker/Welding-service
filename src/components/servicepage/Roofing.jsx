import React from 'react'
import Navbar from '../Navbar'
import Trust from './Trust'
import Contact from '../Contact'
import Footer from '../Footer.jsx'
import Roof1 from '../../assets/roofs/roof-img1.jpeg'
import Roof2 from '../../assets/roofs/roof-img2.jpeg'
import Roof3 from '../../assets/roofs/roof-img3.jpeg'
import Roof4 from '../../assets/roofs/roof-img4.jpeg'
import Roof5 from '../../assets/roofs/roof-img5.jpeg'
import Roof6 from '../../assets/roofs/roof-img6.jpeg'
import Roof7 from '../../assets/roofs/roof-img7.jpeg'
import Roof8 from '../../assets/roofs/roof-img8.jpeg'
import Roof9 from '../../assets/roofs/roof-img9.jpeg'
import Roof10 from '../../assets/roofs/roof-img10.jpeg'
import Roof11 from '../../assets/roofs/roof-img11.jpeg'
import Roof12 from '../../assets/roofs/roof-img12.jpeg'
import Roof13 from '../../assets/roofs/roof-img13.jpeg'
import Roof14 from '../../assets/roofs/roof-img14.jpeg'
import Roof15 from '../../assets/roofs/roof-img15.jpeg'
import Roof16 from '../../assets/roofs/roof-img16.jpeg'
import Roof17 from '../../assets/roofs/roof-img17.jpeg'
import Roof18 from '../../assets/roofs/roof-img18.jpeg'
import Roof19 from '../../assets/roofs/roof-img19.jpeg'
import Roof20 from '../../assets/roofs/roof-img20.jpeg'
import Roof21 from '../../assets/roofs/roof-img21.jpeg'
import Roof22 from '../../assets/roofs/roof-img22.jpeg'
import Roof23 from '../../assets/roofs/roof-img23.jpeg'
import Roof24 from '../../assets/roofs/roof-img24.jpeg'
import Roof25 from '../../assets/roofs/roof-img25.jpeg'
import Roof26 from '../../assets/roofs/roof-img26.jpeg'
import Roof27 from '../../assets/roofs/roof-img27.jpeg'
import Roof28 from '../../assets/roofs/roof-img28.jpeg'
import Roof29 from '../../assets/roofs/roof-img29.jpeg'
import Roof30 from '../../assets/roofs/roof-img30.jpeg'

const roofImages = [
    Roof1, Roof2, Roof3, Roof4, Roof5, Roof6, Roof7, Roof8, Roof9, Roof10,
    Roof11, Roof12, Roof13, Roof14, Roof15, Roof16, Roof17, Roof18, Roof19, Roof20,
    Roof21, Roof22, Roof23, Roof24, Roof25, Roof26, Roof27, Roof28, Roof29, Roof30
]


const roofLines = [
    "Premium quality roofing sheet.",
    "Weather-resistant and durable.",
    "Modern look for any building.",
    "Expert installation guaranteed.",
    "Long-lasting color and finish.",
    "Perfect for homes and offices.",
    "Custom sizes available.",
    "Trusted by hundreds of clients.",
    "Low maintenance, high value.",
    "Engineered for Indian climate."
]

const Roofing = () => {

    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-[80vh] px-2 py-8 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 text-center animate-fade-in-down">
                    Our Roofing Services
                </h1>
                <p className="text-gray-700 text-center max-w-2xl mb-8 animate-fade-in-up">
                    Explore our wide range of roofing sheet installations and projects. We deliver durable, weather-resistant, and visually appealing roofing solutions for homes, businesses, and industries.
                </p>
                <ul className="text-gray-600 text-sm mb-2 list-inside ">
                    <li>✨ Choose from many designs or share your own idea</li>
                    <li>💵 Pricing depends on design, materials, and weight</li>
                    <li>📞 <b>Contact us today for a free consultation!</b></li>
                </ul>

                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {roofImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center transition group animate-fade-in"
                                style={{ animationDelay: `${idx * 0.07}s` }}
                            >
                                <div className="w-full h-44 flex items-center justify-center overflow-hidden rounded-lg mb-2 border border-gray-200 group-hover:border-blue-400 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                                    <img
                                        src={img}
                                        alt={`Roof ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-gray-500 text-xs text-center">{roofLines[idx % roofLines.length]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <Trust />
                <Contact />
                <Footer/>

            </section>
            {/* Animations */}
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

export default Roofing;