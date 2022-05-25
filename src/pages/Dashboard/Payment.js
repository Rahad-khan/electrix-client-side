import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1oOeIduxBrqJyE6JEj3vor1Rflm7Z60Y3YLWPWFxMGvXSXxSvSj3DmsG0G4v1G6uSkjB8rwrdpbVSgKO93vS8V00mRBtVgd9');


const Payment = () => {
    const { id } = useParams();
    const url = `https://toolkits-server.herokuapp.com/payment/${id}`;
    const { data: purchaseInfo, isLoading } = useQuery(["purchaseInfo", id], () =>
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const { name, price, productName, purchaseQuantity, total } = purchaseInfo
    return (
        <div>
            Payment for : {id}
            <div className="card lg:card-side shadow-xl px-2">
                <div className="card shadow-xl flex-1">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-sky-500 mb-4">
                            Dear, {name}. Payment for {productName}
                        </h2>
                        <p>Per unit price is {price}, and you ordered {purchaseQuantity} products</p>
                        <p>So, Please pay total cost <span className='text-blue-500'>${total}</span></p>
                    </div>
                </div>
                <div className="card-body flex-1">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchaseInfo={purchaseInfo} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;