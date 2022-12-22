import React, { useContext } from 'react';

import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ShowReviewDetails = ({ review }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className='lg:mx-8'>
                <div className="rounded-md shadow-md  dark:bg-gray-900 dark:text-gray-100 ml-2">
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
                </div> 

        </div>
    );
};

export default ShowReviewDetails;