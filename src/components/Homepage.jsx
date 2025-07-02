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

const Homepage = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* navbar  */}

            <Navbar />

            {/* header content   */}
            <header className=" text-white text-center py-0.5">

                <div id="gallery" className="relative w-full" data-carousel="slide">

                    <div className="relative h-64 overflow-hidden rounded-b-sm sm:h-80 md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Img1} className="w-full h-full object-cover" alt="gate Img" />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src={Img2} className="w-full h-full object-cover" alt="Home Img" />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Img3} className="w-full h-full object-cover" alt="metal image" />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={Img4} className="w-full h-full object-cover" alt="stand img" />
                        </div>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
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