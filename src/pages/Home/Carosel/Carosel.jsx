import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import Logo from '../../../assets/logo2.jpg'

const Carosel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='my-8'>
            <h2 className='text-5xl font-semibold text-center py-4'> Slider</h2>
            <Slider {...settings}>

                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base font-bold text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="p-8 bg-white rounded shadow-lg w-[30%] mx-auto relative">
                        <BiSolidQuoteAltRight className='text-blue-950 w-16 h-16 absolute -top-5 -left-5'></BiSolidQuoteAltRight>
                        {/* <h2 class="text-2xl font-bold text-gray-800">Card Title</h2> */}
                        <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                            quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                            Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est! Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        <br />
                        <h4 className='text-base text-blue-950'>Mobile Geeks, <span className='text-sm font-thin'>Germany</span></h4>
                        <div className='flex justify-end'>
                            <img src={Logo} alt="" className='w-20' />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carosel;