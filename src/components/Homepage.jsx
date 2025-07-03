import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import FeatureCards from './FeatureCards'
import Gate from '../assets/gates/gate1.jpeg'
import Roof from '../assets/roofs/roof-img2.jpeg'
import Grill from '../assets/stairs_grills/img1.jpeg'
import Owner from './Owner';
import Contact from './Contact';
import Footer from './Footer';
import 'flowbite';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Homepage = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* navbar  */}

            <Navbar />

            {/* header content   */}
            <header className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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
                        <img src={Img4} className="w-full h-full object-cover" alt="Slide 3" />
                    </SwiperSlide>
                </Swiper>
            </header>


            {/* main  */}
            <main>

                {/* features  */}
                <FeatureCards />

                {/* services  */}
                <section id='service' >
                    <div className="container mx-auto px-4 py-8">
                        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* gate service   */}

                            <Link to='/gateservice' >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center" >
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Metal Gates</h3>
                                    <img className="w-full h-48 object-cover rounded-xl mb-4" src={Gate} alt="Gates Image" />
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Gates</button>
                                </div>
                            </Link>

                            {/* roofing service   */}

                            <Link to='/roofingservice' >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Roofing Sheets</h3>
                                    <img className="w-full h-48 object-cover rounded-xl mb-4" src={Roof} alt="Gates Image" />
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Roofs</button>
                                </div>
                            </Link>

                            {/* railing service   */}

                            <Link to='/grillservice' >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl p-4 md:p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Railing & Grills</h3>
                                    <img className="w-full h-48 object-cover rounded-xl mb-4" src={Grill} alt="Gates Image" />
                                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Click To See All Railing</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <Owner />
                <Contact />
                <Footer />
            </main>

        </div>
    )
}
export default Homepage;