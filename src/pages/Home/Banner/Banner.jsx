import React from 'react';

const Banner = () => {
    return (
        <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">World's
                        <span className="text-violet-400"> Largest</span> University's
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Many of these universities, particularly those in the United States, are actually systems of separate
                        <br className="hidden md:inline lg:hidden" />university campuses, and may not accurately represent a comparable student body.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get Started</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn More</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;