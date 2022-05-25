import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { AiTwotoneStar } from "react-icons/ai"
import Spinner from '../Shared/Spinner';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get("https://toolkits-server.herokuapp.com/reviews").then(response => setReviews(response.data))
    }, [])

    const latestReview = reviews.slice(0, 6)
    return (
        <div>
            <h1 className="text-2xl text-center font-semibold mb-10 md:text-4xl">
                <span className="border-b-[2px] border-orange-700">
                    Customer Reviews
                </span>
            </h1>
            {
                reviews.length === 0 && <Spinner></Spinner>
            }
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    latestReview.map(review => <div key={review._id} className="card max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{review?.name}</h2>
                            <div className="flex items-center">Rating :
                                <div className="ml-1 mt-1">
                                    {
                                        <Rating

                                            initialRating={review?.rating}
                                            emptySymbol={<AiTwotoneStar />}
                                            fullSymbol={<AiTwotoneStar style={{ color: "goldenrod" }} />}
                                            readonly
                                        ></Rating>
                                    }
                                </div>
                            </div>
                            <p>{review?.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;