import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import UserRaw from './UserRaw';

const MakeAdmin = () => {
    const { data, isLoading, refetch } = useQuery("allUsers", async () => {
        return await axios.get("http://localhost:5000/user", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const users = data?.data;
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Account</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRaw
                            index={++index}
                            refetch={refetch}
                            key={user._id}
                            user={user}
                        ></UserRaw>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;