import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div className='home-menu'>
            <Slider></Slider>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;