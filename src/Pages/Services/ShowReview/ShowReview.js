import React, { useEffect, useState } from 'react';

import ShowReviewDetails from './ShowReviewDetails';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://fly-to-grapher-server-assignment11.vercel.app/reviewAll`,)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            {
                reviews.length <= 0 ? <h2 className='text-center py-4 text-3xl'>No Review Found</h2> : <h2 className='text-gray-500 text-center text-3xl py-4'>ReviewAll</h2>
            }
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1'>

                {

                    reviews.map(review =>
                        <ShowReviewDetails key={review._id} review={review}></ShowReviewDetails>
                    )
                }

            </div>
        </div>
    );
};

export default ShowReview;