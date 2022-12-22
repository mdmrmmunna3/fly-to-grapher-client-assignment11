import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Review = ({ review, handleDelete, handleUpdateReview }) => {
    const { user } = useContext(AuthContext)
    const { serviceImg, reviewMessage, price, _id } = review;

    return (
        <div>

            <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
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
                        <p><span className='font-semibold'>Message: </span>{reviewMessage}</p>
                    </div>
                    <p className='text-primary my-2'><span className='font-semibold'>price:</span> ${price}</p>
                    <div className="flex justify-between space-x-3">
                        <button onClick={() => handleDelete(_id)} className="btn-outline px-8 py-3 font-semibold rounded-full bg-green-400">Delete</button>

                        {/* The button to open modal */}
                        <label htmlFor="my-modal-3" className="btn px-8 py-3 font-semibold rounded-full bg-green-400 border-0">Edit Review
                        </label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-lg text-center mb-3">Update Review</h3>
                                <textarea className="textarea textarea-primary w-full" placeholder='update review' defaultValue={reviewMessage}></textarea>
                                <div className="modal-action">
                                    <label onClick={handleUpdateReview} htmlFor="my-modal-3" className="btn">Submit</label>
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