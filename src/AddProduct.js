import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const onSubmit = async (data) => {
        const { price, minimum_order, quantity, ...rest } = data;
        const doc = {
            price: +price,
            minimum_order: +minimum_order,
            quantity: +quantity,
            ...rest
        }
        const response = await axios.post('http://localhost:5000/products', doc, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        if (response?.data?.insertedId) {
            toast.success("Product Added SuccessFully");
            reset();
        }
    };
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className="text-2xl text-center font-semibold mb-6">
                <span className="border-b-[2px] border-orange-700">Add a Tool</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 md:w-2/5 mx-auto">
                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full"
                    />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        {...register("price", {
                            required: {
                                value: true,
                                message: "Price is required",
                            }
                        })}
                        type="number"
                        placeholder="Product Price"
                        className="input input-bordered w-full"
                    />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.price?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.price.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: "Product Quantity is required",
                            }
                        })}
                        type="number"
                        placeholder="Quantity"
                        className="input input-bordered w-full"
                    />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.quantity?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.quantity?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        {...register("minimum_order", {
                            required: {
                                value: true,
                                message: "Minimum Order Number is required",
                            }
                        })}
                        type="number"
                        placeholder="Minimumorder quantiy"
                        className="input input-bordered w-full"
                    />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.minimum_order?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.minimum_order?.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea placeholder='Product details' className='textarea textarea-bordered'
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Description is required"
                            }
                        })} />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.description?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.description.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label p-0 mt-1 pb-[2px]">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        {...register("picture", {
                            required: {
                                value: true,
                                message: "Product picture is required",
                            }
                        })}
                        type="text"
                        placeholder='Please provide product image link'
                        className="input input-bordered w-full"
                    />
                    <label className="label p-0 mt-1 pb-[2px]">
                        {errors.picture?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.picture?.message}
                            </span>
                        )}
                    </label>
                </div>
                <input type="submit" className="btn w-full" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;