import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const products = useProducts();

  console.log(products);

  return (
    <div className="flex flex-col gap-y-4">
      <Navigation />
      <div className="container grid grid-cols-7 gap-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="shadow-xl rounded-xl bg-white overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={product.images[0]}
                  className="object-cover object-center w-full"
                  alt=""
                />{' '}
              </div>
              <div className="p-3"></div>
              <p>
                {product.title}{' '}
                <span className="text-xs bg-gray-200 rounded-sm">
                  {product.category}
                </span>
              </p>
              <p className="text-xs text-gray-500">{product.description}</p>
              <span className="text-xs">${product.price}</span>
              <p className="text-xs rounded-sm">Available: {product.stock}</p>
            </div>
          );
        })}
      </div>
      <p>Products</p>
    </div>
  );
};

export default Products;
