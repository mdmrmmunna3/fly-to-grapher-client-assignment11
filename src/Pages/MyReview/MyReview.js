import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Review from './Review';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);

    fetch('http://localhost:5000/reciewAll')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setReviews(data)
    })
    .catch(err => console.error(err))
    return (
        <div>
            <Helmet>
                <title>MyReview {`-- FlyTo-Grapher`}</title>
            </Helmet>

            <div>
                {
                    reviews.map(review => <Review 
                    key={review._id}
                    review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default MyReview;