import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import AdminProductRaw from './AdminProductRaw';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProduct = () => {
    const { data, isLoading, refetch } = useQuery("allProducts", async () => {
        return await axios.get(`http://localhost:5000/products`);
    })

    const [deleteAdminProduct, setDeleteAdminProduct] = useState(null)


    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(deleteAdminProduct);
    const products = data?.data;
    return (
        <section className='my-5'>
            <div class="overflow-x-auto px-12">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <AdminProductRaw
                                key={product._id}
                                index={++index}
                                product={product}
                                setDeleteAdminProduct={setDeleteAdminProduct}
                            ></AdminProductRaw>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteAdminProduct && <ProductDeleteModal
                product={deleteAdminProduct}
                setDeleteAdminProduct={setDeleteAdminProduct}
                refetch={refetch}
            ></ProductDeleteModal>}
        </section>
    );
};

export default ManageProduct;