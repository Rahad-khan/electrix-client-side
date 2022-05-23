import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/purchase/${email}`;

    const { data, isLoading, refetch } = useQuery("purchase", async () => {
        return await axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const purchaseProduct = data?.data;
    console.log(purchaseProduct);
    return (
        <div>
            myorders
        </div>
    );
};

export default MyOrders;