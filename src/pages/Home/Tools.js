import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get("http://localhost:5000/products");
            setProducts(data)
        }
        getProduct()
    }, [])
    const recentProducts = [...products].reverse().slice(0,6);
    

    return (
      <div>
        <h1 className="text-4xl text-center font-semibold mb-6">
          <span className="border-b-[2px] border-orange-700">Our Tools</span>
        </h1>
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