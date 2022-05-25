import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseForm = ({ product }) => {
    const [user] = useAuthState(auth);
    const { minimum_order, quantity, name, price, picture } = product;
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: user?.displayName,
            email: user?.email
        }
    });
    const [disable, setDisable] = useState(false)
    const [quantityError, setQuantityError] = useState('');

    const handleButton = (e) => {
        const purchaseValue = e.target.value;
        if (purchaseValue < minimum_order) {
            setQuantityError(`You have to purchase at least ${minimum_order} products`);
            setDisable(true);
        } else if (purchaseValue > quantity) {
            setQuantityError(`Purchase qauntity is maximum ${quantity}`);
            setDisable(true);
        }
        else {
            setQuantityError('')
            setDisable(false)
        }
    }
    const onSubmit = async (data) => {
        const { purchaseQuantity, ...rest } = data
        const orderDetails = {
            ...rest,
            purchaseQuantity: +purchaseQuantity,
            productName: name,
            picture,
            price,
            total: data.purchaseQuantity * price,
            status: "unpaid"
        }
        const response = await axios.post(`https://toolkits-server.herokuapp.com/purchase`, orderDetails);
        if (response?.data?.insertedId) {
            toast.success("Purchased Successfully");
            reset();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        value={user?.displayName}
                        disabled
                        {...register("name")}
                        type="text"
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
                        {...register("purchaseQuantity", { required: true })}
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
    );
};

export default PurchaseForm;