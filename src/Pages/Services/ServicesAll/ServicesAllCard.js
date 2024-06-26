import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesAllCard = ({ service }) => {
    const { _id, img, name, description, price, discount } = service;
    return (
        <div>
            <div
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
                }}
                className="card w-full bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure className="px-4 pt-4">
                            <img src={img} alt="" className="rounded-xl service-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold text-slate-500-700'>Description</span>: {description.slice(0, 100)}... </p>

                    <div className='flex justify-between'>
                        <p className='text-green-400 font-bold'>Price: ${price}</p>
                        <p className='text-orange-400 font-bold'>Discount: {discount}%</p>
                    </div>
                    <div className="px-2">
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="btn btn-outline btn-primary border-0 text-white">View Details <FaArrowRight ></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesAllCard;

