import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { img, name, description, price, discount } = useLoaderData();

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={img} alt="" className="rounded-xl service-details-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold text-slate-500-700'>Description</span>: {description}</p>

                    <div className='flex justify-between'>
                        <p className='text-green-400 font-bold'>Price: ${price}</p>
                        <p className='text-orange-400 font-bold'>Discount: {discount}%</p>
                    </div>
                    
                </div>
            </div>

            {/* <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure>
                    <img src={img} alt="" className="rounded-xl service-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold text-slate-500-700'>Description</span>: {description}</p>
                    <div className='flex justify-between'>
                        <p className='text-green-400 font-bold'>Price: ${price}</p>
                        <p className='text-orange-400 font-bold'>Discount: {discount}%</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ServiceDetails;