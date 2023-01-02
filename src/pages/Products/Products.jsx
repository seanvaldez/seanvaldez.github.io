import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const products = useProducts();

  console.log(products);

  return (
    <>
      <Navigation />
      <img
        src="https://images.pexels.com/photos/2820640/pexels-photo-2820640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center h-96 px-0 w-full"
      />

      <div className="flex flex-col gap-y-4 pb-20 px-4 sm:px-0 -mt-20">
        <div className="container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-xl rounded-lg bg-white overflow-hidden p-4"
              >
                <div className="h-36 overflow-hidden border-b -mx-4 -mt-4 mb-3">
                  <img
                    src={
                      product?.images?.[5] ||
                      product?.images?.[4] ||
                      product?.images?.[3] ||
                      product?.images?.[2] ||
                      product?.images?.[1] ||
                      product?.images?.[0]
                    }
                    className="object-cover object-center h-full w-full"
                    alt=""
                  />
                </div>

                <p className="mb-3">
                  {product.title}{' '}
                  <span className="mb-2 text-xs bg-slate-100 font-bold">
                    {product.category}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{product.description}</p>
                <span className="text-l font-semibold tracking-tight text-red-600">
                  <span class="text-xs font-semibold">$</span>
                  {product.price}{' '}
                </span>
                <span className="text-gray-400 text-xs">
                  {product.discountPercentage}%
                </span>

                <p className="text-xs rounded-sm text-gray-400">
                  Available: {product.stock}
                </p>

                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    {product.rating}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
