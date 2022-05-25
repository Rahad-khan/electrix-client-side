import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [disable, setDisable] = useState(false);
    const [quantityError, setQuantityError] = useState('');

    const handleButton = (e) => {
        const purchaseValue = e.target.value;
        if (purchaseValue < 0) {
            setQuantityError(`review cam't be a negative value`);
            setDisable(true);
        } else if (purchaseValue > 5) {
            setQuantityError(`Maximum 5 Star review available`);
            setDisable(true);
        }
        else {
            setQuantityError('')
            setDisable(false)
        }
    }
    const handleReview = async (e) => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const description = e.target.description.value;

        const doc = {
            name: user.displayName,
            rating: +rating,
            description
        }
        const { data } = await axios.post(
            `http://localhost:5000/reviews`, doc,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        )
        if (data?.insertedId) {
            toast.success("Thanks For Your Review");
            e.target.reset();
        }
    }
    return (
        <div className='lg:m-10'>
            <div class="card bg-base-100 lg:w-4/5 mx-auto shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-accent font-semibold'>Add A Review</h1>
                    <form onSubmit={handleReview}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Review Star</span>
                            </label>

                            <input
                                placeholder='Accepted 0 to 5 star value'
                                required
                                name='rating'
                                type="number"
                                onChange={(e) => handleButton(e)}
                                step="any"
                                min={1}
                                max={5}
                                className="input input-bordered w-full"
                            />
                            {quantityError && <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {quantityError}
                                </span>
                            </label>}
                        </div>
                        <textarea required className='mt-4 textarea textarea-bordered w-full' rows={`5`} name='description' placeholder='Write Your Review'></textarea>
                        <button disabled={disable} type="submit" className="btn w-full mt-2">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;