import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import PurchaseModal from './PurchaseModal';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [openModal, setModal] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [id]);

    const { description, minimum_order, name, picture, price, quantity } = product;


    return (
        <div className="px-3 lg:px-12 my-10">
            <div class="card lg:card-side bg-base-100 shadow-xl lg:w-2/3 mx-auto">
                <figure><img src={picture} alt={name} /></figure>
                <div class="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>
                        Price: $<span className="text-orange-500">{price}</span>
                    </p>
                    <p>
                        <small>Minimum Order: {minimum_order}</small>
                    </p>
                    <p>
                        <small>Available in Stock: {quantity}</small>
                    </p>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <label onClick={() => setModal(true)} for="purchase-modal" class="btn">Purchase</label>
                    </div>
                </div>
            </div>
            {
                openModal && <PurchaseModal product={product}></PurchaseModal>
            }
        </div >
    );
};

export default Product;