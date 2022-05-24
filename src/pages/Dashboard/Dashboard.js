import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const email = user?.email
    const { data, isLoading } = useQuery(["adminQuery", user], async () => {
        return await axios.get(`http://localhost:5000/user/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    }
    )
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const isAdmin = data?.data;

    const dashboardNav = <>
        {
            (isAdmin?.role === 'admin') ?
                <>
                    <li><Link to={`/dashboard/manageOrder`}>Manage All Orders</Link></li>
                    <li><Link to={`/dashboard/addProduct`}>Add A Product</Link></li>
                    <li><Link to={`/dashboard/manageProduct`}>Manage Products</Link></li>
                    <li><Link to={`/dashboard/makeAdmin`}>Make Admin</Link></li>
                </>
                :
                <>
                    <li><Link to={`/dashboard/orders`}>My Orders</Link></li>
                    <li><Link to={`/dashboard/review`}>Add a Review</Link></li>
                </>
        }
    </>

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-2">
                <Outlet />
                {/* <!-- Page content here --> */}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={`/dashboard/profile`}>My Profile</Link></li>
                    {dashboardNav}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;