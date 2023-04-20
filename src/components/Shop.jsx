import React from 'react';
import Item from './Item';

export default function EcommerceShop() {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        image: 'https://dummyimage.com/400x400/000/fff',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 19.99,
        image: 'https://dummyimage.com/400x400/000/fff',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 5.99,
        image: 'https://dummyimage.com/400x400/000/fff',
      },
    ];
  
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    );
}
  