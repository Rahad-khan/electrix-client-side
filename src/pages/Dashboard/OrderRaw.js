import React from 'react';
import { Link } from 'react-router-dom';

const OrderRaw = ({ index, refetch, product, setDeleteProduct }) => {
    const { productName, price, address, total, purchaseQuantity, paid, _id, transactionId
    } = product;


    return (
        <>
            <tr>
                <th>{++index}</th>
                <td>{productName}</td>
                <td>${price}</td>
                <td>{purchaseQuantity}</td>
                <td>{total}</td>
                <td>{address}</td>
                {
                    paid === 'paid' ?
                        <>
                            <td>
                                <button className='btn btn-sm btn-success'>Paid</button>
                                <p>Transaction Id : <span className='text-success'>{transactionId}</span></p>
                            </td>
                        </> : <>
                            <td>
                                <Link to={`/dashboard/payment/${_id}`}>
                                    <button className='btn btn-sm btn-warning'>Pay</button>
                                </Link>
                                <label onClick={() => setDeleteProduct(product)} htmlFor="cofirmation-modal" className="btn btn-sm btn-error ml-2">Cancel Order</label>
                            </td>
                        </>
                }
            </tr>
        </>
    );
};

export default OrderRaw;