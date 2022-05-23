import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><Link to={`/dashboard/orders`}>My Orders</Link></li>
                    <li><Link to={`/dashboard/review`}>Add a Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;