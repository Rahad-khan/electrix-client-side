import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import ConfirmationModal from './ConfirmationModal';
import PurchaseAdminRow from './PurchaseAdminRow';

const ManageOrder = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data, isLoading, refetch } = useQuery("purchaseAll", async () => {
        return await axios.get("https://toolkits-server.herokuapp.com/purchase", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    });
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const purchases = data?.data;

    return (
        <section>
            <div className="overflow-x-auto px-12">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Purchase Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <PurchaseAdminRow
                                key={purchase._id}
                                index={++index}
                                purchase={purchase}
                                setDeleteProduct={setDeleteProduct}
                            ></PurchaseAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    refetch={refetch}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                ></ConfirmationModal>
            }
        </section>
    );
};

export default ManageOrder;