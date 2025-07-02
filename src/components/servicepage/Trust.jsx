import React from 'react'

const Trust = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-8" >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
                Why Trust Us?
            </h1>
            <p className="text-gray-700 mb-5 text-center max-w-md text-base sm:text-lg">
                We are committed to providing the highest quality metalwork services. Our team of experts ensures that every project meets your expectations with precision and care.
            </p>
            <ul className="w-full max-w-xs sm:max-w-md flex flex-col gap-3 text-gray-700 text-base sm:text-lg">
                <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    Experienced professionals
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    High-quality materials
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    Customer satisfaction guaranteed
                </li>
            </ul>
        </div>
    )
}

export default Trust