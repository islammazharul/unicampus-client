import React from 'react';
import Banner from '../Banner/Banner';
import Colleges from '../Colleges/Colleges';
import Gallary from '../Gallary/Gallary';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Gallary></Gallary>
            {/* <Slider></Slider> */}
            <Carosel></Carosel>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;