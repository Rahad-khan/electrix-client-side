import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const ConfirmationModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { _id, productName } = deleteProduct;


    const handleDelete = async () => {
        const { data } = await axios.delete(`http://localhost:5000/purchase/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        if (data?.deletedCount > 0) {
            toast.success(`Orrder is cancelled successfully`);
            refetch();
            setDeleteProduct(null);
        }
    }


    return (
        <>
            <input type="checkbox" id="cofirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete this {productName}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error ml-2'>Delete</button>
                        <label htmlFor="cofirmation-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;