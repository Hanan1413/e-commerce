import { isAllOf } from "@reduxjs/toolkit";
import { all } from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductGrid = ({collectionName }) => {
  const { allproducts } = useLoaderData();
  // console.log(allproducts)
  console.log(allproducts);
  return (
    <div className="pt-12 grid gap-4 lg:grid-cols-3  md:grid-cols-2 place-items-center mb-24">
    {allproducts?.[collectionName].map((product) => {
      const RiyalAmount = formatPrice(product.price); // Format the price here
  
      return (
        <Link
          key={product.id}
          to={`/products/${collectionName.trim()}/${product.id}`}
          className=" w-100 p-11 shadow-xl hover:shadow-2xl transition duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-64 object-cover"
          />
          <p className="w-56 text-center text-wrap m-auto mt-5">{product.description}</p>
          <p className="m-auto w-full text-center mt-3 font-bold">{RiyalAmount}</p> {/* Display the formatted price */}
        </Link>
      );
    })}
  </div>
  );
}  

export default ProductGrid;
