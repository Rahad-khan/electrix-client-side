import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { data, isLoading, refetch } = useQuery(["adminQuery", user], async () => {
        return await axios.get(`https://toolkits-server.herokuapp.com/user/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    }
    )
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const customer = data?.data;
    console.log(customer);
    const handleLocation = async (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const { data } = await axios.put(`https://toolkits-server.herokuapp.com/updateProfile/${user?.email}`, { location }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        if (data.modifiedCount > 0) {
            toast.success("Updated SuccessFully");
            e.target.reset();
            refetch()
        }
    }
    const handleLinkedin = async (e) => {
        e.preventDefault();
        const lnikedin = e.target.lnikedin.value;
        const { data } = await axios.put(`https://toolkits-server.herokuapp.com/updateProfile/${user?.email}`, { lnikedin }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        if (data.modifiedCount > 0) {
            toast.success("Updated SuccessFully");
            e.target.reset();
            refetch()
        }
    }
    const handlePhone = async (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const { data } = await axios.put(`https://toolkits-server.herokuapp.com/updateProfile/${user?.email}`, { phone }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        if (data.modifiedCount > 0) {
            toast.success("Updated SuccessFully");
            e.target.reset();
            refetch()
        }
    }
    const handleEducation = async (e) => {
        e.preventDefault();
        const education = e.target.education.value;
        const { data } = await axios.put(`https://toolkits-server.herokuapp.com/updateProfile/${user?.email}`, { education }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        if (data.modifiedCount > 0) {
            toast.success("Updated SuccessFully");
            e.target.reset();
            refetch()
        }
    }

    return (
        <div>
            <h1 className='text-2xl text-accent font-semibold'>{user?.displayName}</h1>
            <p>Email: {user?.email}</p>
            {customer.education && <p>Education: {customer?.education}</p>}
            {customer.location && <p>Location: {customer?.location}</p>}
            {customer.phone && <p>Phone: {customer?.phone}</p>}
            {customer.lnikedin && <p>Lnikedin: {customer?.lnikedin}</p>}
            <div className="divider"></div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl text-accent font-semibold'>Update Your Profile</h1>
                    <form onSubmit={handleEducation} className="w-full flex md:flex-row flex-col items-center md:space-x-1">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                required
                                type="text"
                                name='education'
                                placeholder="Education"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input type="submit" className="btn w-full md:w-fit md:mt-8 mt-2 " value="Update" />
                    </form>
                    <form onSubmit={handleLocation} className="w-full flex md:flex-row flex-col items-center md:space-x-1">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                required
                                name='location'
                                type="text"
                                placeholder="address"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input type="submit" className="btn w-full md:w-fit md:mt-8 mt-2 " value="Update" />
                    </form>
                    <form onSubmit={handlePhone} className="w-full flex md:flex-row flex-col items-center md:space-x-1">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                required
                                name='phone'
                                type="tel"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input type="submit" className="btn w-full md:w-fit md:mt-8 mt-2 " value="Update" />
                    </form>
                    <form onSubmit={handleLinkedin} className="w-full flex md:flex-row flex-col items-center md:space-x-1">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Linkedin</span>
                            </label>
                            <input
                                required
                                name='lnikedin'
                                type="text"
                                placeholder="LinkeDin acoount"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <input type="submit" className="btn w-full md:w-fit md:mt-8 mt-2 " value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;