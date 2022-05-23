import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const PurchaseModal = ({ product, setModal }) => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();
    const [disable, setDisable] = useState(false)
    const [quantityError, setQuantityError] = useState('')

    const { minimum_order, name, quantity } = product;
    const handleButton = (e) => {
        const purchaseValue = e.target.value;
        if (purchaseValue < minimum_order || purchaseValue > quantity) {
            setQuantityError(`Qauntity should be greater or eqaul to ${minimum_order} and less or eqaul to ${quantity}`)
            setDisable(true);
        } else {
            setQuantityError('')
            setDisable(false)
        }
    }
    const onSubmit = data => {
        console.log(data)
        setModal(null)
    };

    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                disabled
                                {...register("name")}
                                type="text"
                                value={user?.displayName}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                disabled
                                value={user?.email}
                                {...register("email")}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is required",
                                    }
                                })}
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.address?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.address.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                {...register("phone")}
                                type="tel"
                                placeholder="Contact Number"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Purchase Quantity</span>
                            </label>

                            <input
                                {...register("purchaseQuantity")}
                                type="number"
                                onChange={(e) => handleButton(e)}
                                min={minimum_order}
                                max={quantity}
                                defaultValue={minimum_order}
                                className="input input-bordered w-full"
                            />
                            {quantityError && <label className="label">
                                <span className="label-text-alt text-red-500">
                                    {quantityError}
                                </span>
                            </label>}
                        </div>
                        <button disabled={disable} type="submit" className="btn w-full mt-2">Purchase Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;