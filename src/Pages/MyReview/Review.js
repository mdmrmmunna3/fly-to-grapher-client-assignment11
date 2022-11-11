import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Review = ({ review, handleDelete,handleUpdateReview }) => {
    const { user } = useContext(AuthContext)
    const { serviceImg, reviewMessage, price, _id, email } = review;

    return (
        <div>

            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{user?.displayName}</h2>
                        </div>
                    </div>

                </div>
                <img src={serviceImg} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <p>Message:{reviewMessage}</p>
                    </div>
                    <p className='text-primary my-2'>price: ${price}</p>
                    <div className="flex justify-between space-x-3">
                        <button onClick={() => handleDelete(_id)} type="button" className="px-8 py-3 font-semibold rounded-full bg-green-400">Delete</button>

                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn px-8 py-3 font-semibold rounded-full bg-green-400 border-0">Edit Review
                        </label>

                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center mb-3">Update Review</h3>
                                <textarea className="textarea textarea-primary w-full" placeholder='update review'></textarea>
                                <div className="modal-action">
                                    <label onClick={()=> handleUpdateReview(_id)} htmlFor="my-modal-6" className="btn">Submit</label>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;