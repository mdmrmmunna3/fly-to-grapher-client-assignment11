import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {
    const { user, setLoader } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://fly-to-grapher-server-assignment11.vercel.app/reviewAll?email=${user?.email}`,)

            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
            .catch(err => console.error(err))

    }, [user?.email])

    // const handleUpdateReview = id => {
    // fetch(`https://fly-to-grapher-server-assignment11.vercel.app/reviewAll/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(reviews)
    // })

    // fetch(`http://localhost:5000/reviewAll/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(reviews)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         if (data.modifiedCount > 0) {
    //             toast.success('update successfully')
    //             setReviews(data)
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error updating review:', error);
    //         toast.error('Failed to update review');
    //     });
    // }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://fly-to-grapher-server-assignment11.vercel.app/reviewAll/${id}`, {
                method: 'DELETE',

            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully')
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
            {

                <> <h2 className='text-center text-3xl mt-20'>Review Length: {reviews.length}</h2></>

            }
            {
                setLoader && <div className='lg:mx-10 md:mx-6 mx-2 my-12 grid lg:grid-cols-2  gap-6'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        // handleUpdateReview={handleUpdateReview}
                        ></Review>)

                    }
                </div>
            }



        </div>
    );
};

export default MyReview;