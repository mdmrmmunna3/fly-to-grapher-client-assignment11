import React from 'react';
import './MyWork.css';

import newsImg1 from '../../../assets/Mywork-Imges/work-img1.jpg';
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
        <div className='pb-12 mx-2 md:mx-6 lg:mx-7'>
            <div className='work-title'>
                <h1 className='text-white text-5xl text-center mt-10 mb-8 hover:text-slate-400'>My Work</h1>
            </div>

            {/* img part  */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 img-container ">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg1} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg2} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg3} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg4} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg5} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg6} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg7} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg8} alt="" />
                </div>

                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img className='rounded-lg w-full' src={newsImg9} alt="" />
                </div>

            </div>
        </div>
    );
};

export default MyWork;