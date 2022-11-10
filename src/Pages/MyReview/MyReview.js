import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewAll?email=${user?.email}`,)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviewAll/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        console.log(remaining)
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <Helmet>
                <title>MyReview {`-- FlyTo-Grapher`}</title>
            </Helmet>

            <div className='mx-10 my-12 grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default MyReview;