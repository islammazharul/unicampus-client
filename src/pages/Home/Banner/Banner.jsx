import React from 'react';
import img from '../../../assets/university-bg.jpg'

const Banner = () => {
    return (
        // <section className="  text-gray-100 h-full">
        <div className="relative w-full flex justify-center mx-auto">
            <img src={img} alt="" className="bg-cover" />
            <div className="absolute md:bottom-0 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg">
                <h1 className="md:text-5xl text-white font-bold">World's
                    <span className="text-violet-400"> Largest</span> University's
                </h1>
                <p className="md:mt-6 md:mb-8 text-xs text-gray-200 md:text-lg">Many of these universities, particularly those in the United States, are actually systems of separate
                    <br className="hidden md:inline lg:hidden" />university campuses, and may not accurately represent a comparable student body.
                </p>
                <div className="md:flex">
                    <a rel="noopener noreferrer" href="#" className="md:px-8 md:py-3 px-1 md:block md:text-lg font-semibold rounded bg-violet-400 text-gray-900">Get Started</a>
                    <a rel="noopener noreferrer" href="#" className="md:px-8 md:py-3 px-1 ms-3 md:text-lg font-semibold border rounded border-gray-100">Learn More</a>
                </div>
            </div>
            {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/rMqp0L9/coach-11.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div> */}
        </div>
        // </section>
    );
};

export default Banner;