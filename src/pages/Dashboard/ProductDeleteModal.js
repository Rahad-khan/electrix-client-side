import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ product, setDeleteAdminProduct, refetch }) => {
    const { name, _id } = product;
    const handleDelete = async () => {
        const { data } = await axios.delete(`http://localhost:5000/products/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        if (data?.deletedCount > 0) {
            toast.success(`Orrder is deleted successfully`);
            refetch();
            setDeleteAdminProduct(null);
        }
    }
    return (
        <>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error ml-2'>Delete</button>
                        <label htmlFor="product-delete-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDeleteModal;