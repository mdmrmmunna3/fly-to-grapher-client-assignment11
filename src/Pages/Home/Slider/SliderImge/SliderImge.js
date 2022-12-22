import React from 'react';
import './SliderImge.css';

const SliderImge = ({ slider }) => {
    const { title, image, prev, id, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slider-img w-full slider-container'>
                <img src={image} alt="" className="w-full lg:h-full h-3/4" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4 w-2/4">
                <h2 className='text-slate-200 lg:text-2xl text-xl slider-title'>{title}</h2>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle hover:bg-amber-500 border-0">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-amber-500 border-0">❯</a>
            </div>
        </div>

    );
};

export default SliderImge;