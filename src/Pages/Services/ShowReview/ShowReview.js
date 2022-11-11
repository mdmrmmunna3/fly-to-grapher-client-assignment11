import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ShowReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviewAll?user=${user?._id}`,)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
            .catch(err => console.error(err))
    }, [user?._id])
    return (
        <div>
            <h2 className='text-gray-500 text-center text-3xl'>Review</h2>
            <div className='bg-gray-300 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    reviews.map(review => <div key={review?._id}>
                        <div className="rounded-md shadow-md  dark:bg-gray-900 dark:text-gray-100 ml-2">
                            <div className="flex items-center justify-between p-3">
                                <div className="flex items-center space-x-2">
                                    <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                                    <div className="-space-y-1">
                                        <h2 className="text-sm font-semibold leading-none">{user?.displayName}</h2>
                                    </div>
                                </div>

                            </div>
                            <img src={review?.serviceImg} alt="" className="object-cover object-center  dark:bg-gray-500 h-48 w-full" />
                            <div className="p-3">
                                <div className="flex items-center justify-between">
                                    <p>Message:{review?.reviewMessage}</p>
                                </div>
                                <p className='text-primary my-2'>price: ${review?.price}</p>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;