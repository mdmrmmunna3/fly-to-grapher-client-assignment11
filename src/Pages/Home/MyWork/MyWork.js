import React from 'react';
import './MyWork.css';

import newsImg1 from '../../../assets/Mywork-Imges/work-img1.png';
import newsImg2 from '../../../assets/Mywork-Imges/work-img2.png';
import newsImg3 from '../../../assets/Mywork-Imges/work-img3.png';
import newsImg4 from '../../../assets/Mywork-Imges/work-img4.png';
import newsImg5 from '../../../assets/Mywork-Imges/work-img5.png';
import newsImg6 from '../../../assets/Mywork-Imges/work-img6.png';
import newsImg7 from '../../../assets/Mywork-Imges/work-img7.png';
import newsImg8 from '../../../assets/Mywork-Imges/work-img8.png';
import newsImg9 from '../../../assets/Mywork-Imges/work-img9.png';
const MyWork = () => {
    return (
        <div className='pb-12'>
            <div className='work-title'>
                <h1 className='text-white text-5xl text-center'>My Work</h1>
            </div>

            {/* img part  */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-y-8 gap-x-4 img-container">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg1} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg2} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg3} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg4} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg5} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg6} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg7} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg8} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <img className='rounded-lg' src={newsImg9} alt="" />
                </div>

            </div>
        </div>
    );
};

export default MyWork;