import React from 'react';

const OrderRaw = ({ index, refetch, product, setDeleteProduct }) => {
    const { productName, price, address, total, purchaseQuantity, paid } = product;


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
                            <td><button className='btn btn-sm btn-success'>Paid</button></td>
                        </> : <>
                            <td>
                                <button className='btn btn-sm btn-warning'>Pay</button>
                                <label onClick={() => setDeleteProduct(product)} htmlFor="cofirmation-modal" className="btn btn-sm btn-error ml-2">Delete</label>
                            </td>
                        </>
                }
            </tr>
        </>
    );
};

export default OrderRaw;