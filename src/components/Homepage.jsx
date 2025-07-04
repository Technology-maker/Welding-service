import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import FeatureCards from './FeatureCards'
import Owner from './Owner';
import Contact from './Contact';
import Footer from './Footer';
import OthService from '../assets/othersimg/banch1.jpg'
import 'flowbite';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Service slides images
import Gate1 from '../assets/gates/gate1.jpeg'
import Gate2 from '../assets/gates/gate2.jpeg'
import Gate3 from '../assets/gates/gate4.jpeg'
import Gate4 from '../assets/gates/gate5.jpeg'

import Roof1 from '../assets/roofs/roof-img1.jpeg'
import Roof2 from '../assets/roofs/roof-img2.jpeg'
import Roof3 from '../assets/roofs/roof-img3.jpeg'
import Roof4 from '../assets/roofs/roof-img4.jpeg'

import Ralling1 from '../assets/stairs_grills/img1.jpeg'
import Ralling2 from '../assets/stairs_grills/img2.jpeg'
import Ralling3 from '../assets/stairs_grills/img3.jpeg'
import Ralling4 from '../assets/stairs_grills/img4.jpeg'

import Other1 from '../assets/othersimg/banch1.jpg'
import Other2 from '../assets/othersimg/chair1.jpg'
import Other3 from '../assets/othersimg/stand1.jpg'
import Other4 from '../assets/othersimg/stand2.jpg'
import other5 from '../assets/othersimg/stand5.jpg'

const gateSlides = [Gate1, Gate2, Gate3, Gate4];
const roofSlides = [Roof1, Roof2, Roof3, Roof4];
const grillSlides = [Ralling1, Ralling2, Ralling3, Ralling4];
const otherSlides = [Other1, Other2, Other3, Other4, other5];

const Homepage = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* navbar  */}
            <Navbar />

            {/* header content   */}
            <header className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in-down">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <img src={Img1} className="w-full h-full object-cover" alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img2} className="w-full h-full object-cover" alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img3} className="w-full h-full object-cover" alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img4} className="w-full h-full object-cover" alt="Slide 4" />
                    </SwiperSlide>
                </Swiper>
            </header>

            {/* main  */}
            <main>
                {/* features  */}
                <div className="animate-fade-in-up">
                    <FeatureCards />
                </div>

                {/* services with slides */}
                <section id='service'>
                    <div className="container mx-auto px-4 py-8">
                        <h2 className="text-3xl font-bold text-center mb-6 animate-fade-in-down">Our Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* gate service with slides */}
                            <Link to='/gateservice'>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center transition group animate-fade-in flex flex-col items-center"
                                    style={{ animationDelay: `0.1s` }}>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition">Metal Gates</h3>
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        className="w-full h-48 mb-4 rounded-xl"
                                    >
                                        {gateSlides.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img src={img} className="w-full h-48 object-cover rounded-xl" alt={`Gate Slide ${idx + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Gates</button>
                                </div>
                            </Link>
                            {/* roofing service with slides */}
                            <Link to='/roofingservice'>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center transition group animate-fade-in flex flex-col items-center"
                                    style={{ animationDelay: `0.2s` }}>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition">Roofing Sheets</h3>
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        autoplay={{ delay: 2400, disableOnInteraction: false }}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        className="w-full h-48 mb-4 rounded-xl"
                                    >
                                        {roofSlides.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img src={img} className="w-full h-48 object-cover rounded-xl" alt={`Roof Slide ${idx + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Roofs</button>
                                </div>
                            </Link>
                            {/* railing service with slides */}
                            <Link to='/grillservice'>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center transition group animate-fade-in flex flex-col items-center"
                                    style={{ animationDelay: `0.3s` }}>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition">Railing & Grills</h3>
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        autoplay={{ delay: 2200, disableOnInteraction: false }}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        className="w-full h-48 mb-4 rounded-xl"
                                    >
                                        {grillSlides.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img src={img} className="w-full h-48 object-cover rounded-xl" alt={`Grill Slide ${idx + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Railing</button>
                                </div>
                            </Link>
                            {/* other services with slides */}
                            <Link to={'/otherservice'}>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center transition group animate-fade-in flex flex-col items-center"
                                    style={{ animationDelay: `0.4s` }}>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition">Other Services</h3>
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        className="w-full h-48 mb-4 rounded-xl"
                                    >
                                        {otherSlides.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img src={img} className="w-full h-48 object-cover rounded-xl" alt={`Other Slide ${idx + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="animate-fade-in-up">
                    <Owner />
                    <Contact />
                    <Footer />
                </div>
            </main>

            {/* Animation styles */}
            <style>
                {`
                .animate-fade-in {
                  opacity: 0;
                  transform: translateY(30px) scale(0.98);
                  animation: fadeIn 0.7s forwards;
                }
                .animate-fade-in-down {
                  opacity: 0;
                  transform: translateY(-30px);
                  animation: fadeIn 0.7s forwards;
                }
                .animate-fade-in-up {
                  opacity: 0;
                  transform: translateY(30px);
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
        </div>
    )
}
export default Homepage;