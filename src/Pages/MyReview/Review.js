import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Review = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { serviceImg, reviewMessage, price, _id } = review;
    const [updatedMessage, setUpdatedMessage] = useState(reviewMessage);
    const [tempMessage, setTempMessage] = useState(reviewMessage); // Temporary state for textarea
    const navigate = useNavigate();

    const handleUpdateReview = () => {
        fetch(`https://fly-to-grapher-server-assignment11.vercel.app/reviewAll/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewMessage: tempMessage }) // Use tempMessage here
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully');
                    setUpdatedMessage(tempMessage); // Update main state only on success
                    navigate("/review");
                } else {
                    toast.error('Failed to update review');
                }
            })
            .catch(error => {
                console.error('Error updating review:', error);
                toast.error('Failed to update review');
            });
    };

    const handleModalSubmit = () => {
        handleUpdateReview();
    };

    return (
        <div>
            <div
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
                }}
                className="p-2 rounded-md">
                <div className="flex gap-3 flex-row h-36">
                    <img src={serviceImg} alt="" title={review?.serviceName} className="object-cover object-center  dark:bg-gray-500 h-full w-24" />
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
                            <div className="">
                                <p title={updatedMessage}><span className='font-semibold'>Message: </span>{updatedMessage?.slice(0, 50)}... </p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='text-green-600 my-2'><span className='font-medium'>price</span>: ${price}</p>

                                {/* button part  */}
                                <div className="flex space-x-3">
                                    <button onClick={() => handleDelete(_id)} className="font-semibold text-2xl text-red-600"><RiDeleteBin6Line /></button>

                                    {/* The button to open modal */}
                                    <label htmlFor={`my-modal-${_id}`} className="font-semibold text-2xl text-green-600 cursor-pointer"><GrUpdate /></label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="font-bold text-lg text-center mb-3">Update Review</h3>
                                            <textarea
                                                className="textarea textarea-primary w-full"
                                                placeholder='Update review'
                                                value={tempMessage}
                                                onChange={(e) => setTempMessage(e.target.value)}
                                            ></textarea>
                                            <div className="modal-action">
                                                <label onClick={handleModalSubmit} htmlFor={`my-modal-${_id}`} className="btn">Submit</label>
                                            </div>
                                        </div>
                                    </div>
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
