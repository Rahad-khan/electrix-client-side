import React from 'react';
import error from '../../images/404.jpg'

const Error = () => {
    return (
        <div>
            <img src={error} className="w-full object-cover" alt="" />
        </div>
    );
};

export default Error;