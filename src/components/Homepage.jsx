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

const Homepage = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* navbar  */}

            <Navbar />


            {/* header content   */}
            <header className="relative w-full">
                <div id="gallery" className="relative w-full" data-carousel="slide">

                    {/* Carousel Wrapper */}
                    <div className="relative h-64 overflow-hidden rounded-b-lg sm:h-80 md:h-96">

                        <div className="duration-700 ease-in-out" data-carousel-item="active">
                            <img src={Img1} className="absolute block w-full h-full object-cover" alt="Slide 1" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Img2} className="absolute block w-full h-full object-cover" alt="Slide 2" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Img3} className="absolute block w-full h-full object-cover" alt="Slide 3" />
                        </div>

                    </div>

                    {/* Slider Controls */}
                    <button
                        type="button"
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 group-hover:bg-white/80">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 group-hover:bg-white/80">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
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