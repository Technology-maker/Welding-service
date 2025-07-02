import React from 'react';

const FeatureCards = () => {
    const features = [
        {
            title: "25+ YEARS EXPERIENCE",
            description: "We have over 25 years of experience in welding and fabrication.",
        },
        {
            title: "24/7 SERVICES",
            description: "we are 24/7 available to serve you",
        },
        {
            title: "HIGH QUALITY WORK",
            description: "high quality services and products.",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white p-6 text-sm">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-[#dedccd] px-8 py-6 text-center shadow-sm rounded-md w-full md:w-1/3"
                >
                    <h3 className="text-lg sm:text-sm font-bold text-black">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;