import React from 'react';

export default function Item({ product }) {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="p-4">
          <h2 className="text-gray-800 font-medium">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Add to Cart</button>
        </div>
      </div>
    );
  }