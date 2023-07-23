import React from 'react';
import Banner from '../Banner/Banner';
import Colleges from '../Colleges/Colleges';
import Gallary from '../Gallary/Gallary';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Gallary></Gallary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;