import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { _id, img, name, description, price, discount } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregisterd';
        const reviewMessage = form.reviewMessage.value;
        console.log(email, reviewMessage)
        const review = {
            service: _id,
            serviceName: name,
            price,
            email,
            reviewMessage,
            name,
            userImg: user?.photoUrl,
            serviceImg: img,
        }

        fetch(`http://localhost:5000/servicesAll`, {
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
                    alert('add review Successfully');

                    // rest form
                    form.reset();
                }
            })
    }

    return (

        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-4">
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

            {/* show review  */}
            {/* <ShowReview></ShowReview> */}

            {/* review submit part  */}
            <div className='my-10 mx-10 bg-slate-400 rounded-lg'>
                <h2 className='text-center text-4xl mb-4 text-white'>Review</h2>
                <form onSubmit={handleReview}>
                    <div className='md:flex justify-around sm:text-center '>
                        <input type="text" placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" defaultValue={user?.email} readOnly />
                    </div>
                    <textarea name='reviewMessage' className="textarea textarea-primary mt-3 w-full" placeholder="review"></textarea>
                    <button className="btn btn-primary my-3">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;