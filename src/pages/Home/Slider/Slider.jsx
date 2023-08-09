import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="p-4 w-80 cardd">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="p-4 w-80">
                        <div class="p-8 bg-white rounded shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800">Card Title</h2>
                            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur deserunt
                                quas repellat facere dolor blanditiis tenetur quibusdam corporis quaerat. Impedit, repellendus!
                                Delectus et illum eum ipsa magni? Facilis, molestiae est!</p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
            <div></div>
        </>

    );
};

export default Slider;