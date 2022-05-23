import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import ConfirmationModal from './ConfirmationModal';
import OrderRaw from './OrderRaw';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteProduct, setDeleteProduct] = useState(null);
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
    return (
        <div className="overflow-x-auto">

            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchaseProduct.map((product, index) => <OrderRaw
                            key={product._id}
                            index={index}
                            setDeleteProduct={setDeleteProduct}
                            product={product}
                        ></OrderRaw>)
                    }
                </tbody>
            </table>
            {
                deleteProduct && <ConfirmationModal
                    refetch={refetch}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;