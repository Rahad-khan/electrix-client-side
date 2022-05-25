import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const UserRaw = ({ index, user, refetch }) => {
    const handleMakeAdmin = async () => {
        const email = user.email;
        const { data } = await axios.put(`https://toolkits-server.herokuapp.com/user/admin/${email}`, null, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        if (data.modifiedCount > 0) {
            refetch();
            toast.success("Admin created successfully");
        }
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{user?.email}</td>
            {
                user.role === 'admin' ? <td className='text-success'>Admin</td> : <td className='text-warning'>User</td>
            }

            {
                user.role === 'admin' ? '' : <td className='text-warning'>
                    <button onClick={handleMakeAdmin} className='btn btn-xs'>Make Admin</button>
                </td>
            }

        </tr>
    );
};

export default UserRaw;