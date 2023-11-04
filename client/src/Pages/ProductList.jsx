import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard
            key={product.id} // Assuming each product has a unique id
            product = {product}
          />
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}
