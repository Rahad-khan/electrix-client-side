import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const PurchaseAdminRow = ({ index, purchase, refetch, setDeleteProduct }) => {
    const { _id, name, email, productName, price, purchaseQuantity, total, status } = purchase;

    const handleShipping = async () => {
        const { data } = await axios.patch(`http://localhost:5000/shipment/${_id}`, null, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        });
        if (data.modifiedCount > 0) {
            toast("Product shipping successfully");
            refetch();
        }
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{purchaseQuantity}</td>
            <td>{total}</td>
            {
                status === 'unpaid' && <td><button className='btn btn-xs btn-error'>Unpaid</button>
                    <label onClick={() => setDeleteProduct(purchase)} htmlFor="cofirmation-modal" className="btn btn-xs btn-error ml-2">Cancel Order</label>
                </td>
            }
            {
                status === 'paid' && <td><button onClick={handleShipping} className='btn btn-xs btn-warning'>Pending</button></td>
            }
            {
                status === 'shipped' && <td><button className='btn btn-xs btn-success'>Shipped</button></td>
            }
        </tr>
    );
};

export default PurchaseAdminRow;