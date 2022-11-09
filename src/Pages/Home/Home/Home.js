import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import MyWork from '../MyWork/MyWork';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div className='home-menu'>
            <Slider></Slider>
            <LatestNews></LatestNews>
            <MyWork></MyWork>
        </div>
    );
};

export default Home;