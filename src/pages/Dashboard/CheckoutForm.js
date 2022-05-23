import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ purchaseInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [strtipeError, setStripeError] = useState("");
    const [transectionId, setTransectionid] = useState("");
    const [clientSecret, setClinetSecret] = useState('')

    const { total, name, email, _id } = purchaseInfo;
    useEffect(() => {
        axios.post(
            `http://localhost:5000/create-payment-intent`,
            { total },
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        ).then(response => {
            const { data } = response;
            if (data) {
                setClinetSecret(data?.clientSecret);
            }
        })
    }, [total]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setStripeError(error?.message || "");

        //comfirm payment
        const { paymentIntent, error: payemtError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            }
        );
        if (payemtError) {
            setStripeError(payemtError?.message);
        } else {
            setTransectionid(paymentIntent.id)
            setStripeError('');
            toast.success('Congratulation your payment is done successdully');
            const paidInfromation = {
                transactionId: paymentIntent.id,
                buyer: _id,
            }
            axios.patch(`http://localhost:5000/payment/${_id}`, paidInfromation, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                }
            })
                .then(response => {
                    const { data } = response;
                    console.log(data);
                })
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm btn-success mt-2 text-white"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {strtipeError && <p className="text-red-500">{strtipeError}</p>}
            {transectionId && (
                <p>Your transection id :
                    <span className="text-orange-500">{transectionId}</span>
                </p>
            )}
        </>
    );
};

export default CheckoutForm;