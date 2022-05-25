import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get(`https://toolkits-server.herokuapp.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [id]);

    const { description, minimum_order, name, picture, price, quantity } = product;


    return (
        <div className="px-3 lg:px-12 my-10 grid md:grid-cols-2 gap-4">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-40 md:h-52 mt-2" src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>
                        Price: $<span className="text-orange-500">{price}</span>
                    </p>
                    <p>
                        <small><strong>Minimum Order:</strong> {minimum_order}</small>
                    </p>
                    <p>
                        <small><strong>Available in Stock:</strong> {quantity}</small>
                    </p>
                    <p><strong>Product Details :</strong> {description}</p>
                </div>
            </div>
            <PurchaseForm product={product} />
        </div >
    );
};

export default Product;