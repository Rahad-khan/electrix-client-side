import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner';
import ToolsCard from './ToolsCard';

const Tools = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("https://toolkits-server.herokuapp.com/products");
      setProducts(data)
    }
    getProduct()
  }, [])
  const recentProducts = products.slice(0, 6);


  return (
    <div>
      <h1 className="text-2xl text-center font-semibold mb-10 md:text-4xl">
        <span className="border-b-[2px] border-orange-700">Our Tools</span>
      </h1>
      {products.length === 0 && <Spinner></Spinner>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentProducts.map(product => <ToolsCard
          key={product._id}
          product={product}
        ></ToolsCard>)}
      </div>
    </div>
  );
};

export default Tools;