import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = ({ product }) => {
  const { _id, picture, price, quantity, description, name, minimum_order } =
    product;
  return (
    <div className="card card-compact lg:max-w-md shadow-xl">
      <figure>
        <img className="h-40 md:h-52 mt-2" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-xl'>
          Price: $<span className="text-orange-500">{price}</span>
        </p>
        <p>
          <small>Minimum Order: {minimum_order}</small>
        </p>
        <p>
          <small>Available in Stock: {quantity}</small>
        </p>
        <p>{description.slice(0, 150)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;