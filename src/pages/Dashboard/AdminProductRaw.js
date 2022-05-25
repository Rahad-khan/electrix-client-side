import React from 'react';

const AdminProductRaw = ({ product, index, setDeleteAdminProduct }) => {
    const { picture, price, quantity, name } =
        product;

    return (
        <tr>
            <th>{index}</th>
            <td><img className='h-12' src={picture} alt={name} /></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteAdminProduct(product)} htmlFor="product-delete-modal" className="btn btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default AdminProductRaw;