import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';
import './ServiceDetails.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ServiceDetails = () => {
    const { _id, img, name, description, price, discount } = useLoaderData();
    const { user, setLoader } = useContext(AuthContext);
    const [rating, setRating] = useState(0);

    const handleRatingChange = selectedValue => {
        setRating(selectedValue);
        // console.log(selectedValue);
    };

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const email = user?.email || 'unregisterd';
        const reviewMessage = form.reviewMessage.value;
        console.log(email, reviewMessage, rating, serviceName);

        const review = {
            service: _id,
            serviceName,
            price,
            email,
            reviewMessage,
            userImg: user?.photoURL,
            userName: user?.displayName,
            serviceImg: img,
            rating
        }

        fetch('https://fly-to-grapher-server-assignment11.vercel.app/reviewAll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('review added successfully')
                    // rest form
                    form.reset();
                }
            })
    }

    return (

        <section>
            {
                setLoader && <div>

                    <div className="card w-full bg-base-100 shadow-xl mb-4">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <figure className="px-4 pt-4">
                                    <img src={img} alt="" className="rounded-xl service-details-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" />
                                </figure>
                            </PhotoView>
                        </PhotoProvider>

                        <div className="card-body ">
                            <h2 className="card-title">{name}</h2>
                            <p><span className='font-semibold text-slate-500-700'>Description</span>: {description}</p>

                            <div className='flex justify-between'>
                                <p className='text-green-400 font-bold'>Price: ${price}</p>
                                <p className='text-orange-400 font-bold'>Discount: {discount}%</p>
                            </div>

                        </div>
                    </div>

                    {/* show review  */}
                    <ShowReview></ShowReview>

                    {/* review submit part  */}
                    <div className='lg:m-10 m-4 p-6 bg-slate-400 rounded-lg'>
                        <h2 className='text-center text-4xl mb-4 text-white'>Review</h2>
                        <form onSubmit={handleReview}>
                            <div className='md:flex justify-around sm:text-center '>
                                <input type="text" placeholder="username" className="input input-bordered input-primary w-full max-w-xs mb-2" defaultValue={user?.displayName} />
                                <input type="text" placeholder="name" name="serviceName" className="input input-bordered input-primary w-full max-w-xs mb-2" defaultValue={name} />
                                <input type="email" placeholder="email" className="input input-bordered input-primary w-full max-w-xs " defaultValue={user?.email} disabled />
                            </div>
                            {/* rating part start */}
                            <div className="flex justify-center">
                                <label htmlFor="rating"></label>
                                <Rating
                                    id="rating"
                                    style={{ maxWidth: 150 }}
                                    value={rating} onChange={handleRatingChange} required></Rating>
                            </div>
                            {/* rating part end */}
                            <textarea name='reviewMessage' className="textarea textarea-primary mt-3 w-full " placeholder="review" required></textarea>
                            <button className="btn btn-primary my-3 ">Submit Review</button>
                        </form>
                    </div>
                </div>
            }
        </section>
    );
};

export default ServiceDetails;