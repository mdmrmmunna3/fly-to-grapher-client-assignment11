import React from 'react';
import Service from '../../Services/Service/Service';
import LatestNews from '../LatestNews/LatestNews';
import MyWork from '../MyWork/MyWork';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet-async';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home {`-- FlyTo-Grapher`}</title>
            </Helmet>
            <div className='home-menu'>
                <Slider></Slider>
                <LatestNews></LatestNews>
                <Service></Service>
                <MyWork></MyWork>
            </div>
        </div>
    );
};

export default Home;

