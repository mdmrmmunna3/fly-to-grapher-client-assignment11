import React, { useContext } from 'react';

import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShowReviewDetails = ({ review }) => {
    // console.log(review)
    const { user } = useContext(AuthContext);

    return (
        <div className=''>
            {/* <div className="rounded-md shadow-md  dark:bg-gray-900 dark:text-gray-100 ml-2">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        {
                            user?.email === review?.email ?
                                <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                                : <img src={review?.userImg} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        }

                        <div className="-space-y-1">
                            {
                                user?.email === review?.email ?
                                    <h2 className="text-sm font-semibold leading-none">{user?.displayName}</h2>
                                    :
                                    <h2 className="text-sm font-semibold leading-none">{review?.userName}</h2>
                            }
                        </div>
                    </div>

                </div>
                <img src={review?.serviceImg} alt="" className="object-cover object-center  dark:bg-gray-500 h-48 w-full" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <p><span className='font-semibold'>Message: </span>{review?.reviewMessage}</p>
                    </div>
                    <p className='text-primary my-2'>price: ${review?.price}</p>

                </div>
            </div> */}

            <div
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
                }}
                className="p-2 rounded-md">
                <div className="flex gap-3 flex-row h-28">
                    <img src={review?.serviceImg} alt="" title={review?.serviceName} className="object-cover object-center  dark:bg-gray-500 h-full w-24" />
                    <div>
                        <div className="flex items-center space-x-2">
                            {
                                user?.email === review?.email ?
                                    <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                                    : <img src={review?.userImg} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                            }

                            <div className="-space-y-1">
                                {
                                    user?.email === review?.email ?
                                        <h2 className="text-sm font-semibold leading-none">{user?.displayName}</h2>
                                        :
                                        <h2 className="text-sm font-semibold leading-none">{review?.userName}</h2>
                                }
                            </div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={review?.rating}
                                readOnly
                            />
                        </div>
                        <div className="py-1">
                            <div className="flex items-center justify-between">
                                <p><span className='font-semibold'>Message: </span>{review?.reviewMessage.slice(0, 50)}... </p>
                            </div>
                            <p className='text-primary my-2'><span className='font-medium'>price</span>: ${review?.price}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowReviewDetails;