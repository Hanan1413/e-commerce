import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";
import { generateAmountOptions } from '../utils';

const SingleProduct = () => {
  const { product } = useLoaderData();
  
  console.log(product);
  const { image, title, price, description, colors, brandName } = product;
  const riyalAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors);
  const [amount, setAmoun]= useState(1);

  const handleAmount =(e)=>{
    setAmoun(parseInt(e.target.value))

  }

  return (
    <section className="mb-44 ">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Products */}
      <div className="grid gap-y-5 lg:grid-cols-2  grid-y-8 lg:gap-x-16">
        {/* image */}
        <img src={image} alt={title} className="w-96  object-cover  rounded-lg ml-auto"/>

  

    {/* Product */}

    <div>
        <h1 className="capitalize text-3xl font-bold">
        {title}

        </h1>
        <h4 className="text-xl text-neutral-500 font-bold mt-2">{brandName}</h4>
        <p className="mt-3 text-xl">{riyalAmount}</p>
        <p className="leading-8">{description}</p>

        {/* colors */}
        <div className="mt-2">
          <h4 className="text-md font-medium tracking-wider capitalize">
            colors

          </h4>
          <div className="mt-2">
            <button type="button" className={`badge w-6 h6 mr-2${colors === productColor && 'border-2 border-zinc-900 '}`}       style={{ backgroundColor: colors }} onClick={() =>setProductColor(colors)}></button>
          </div>

        </div>

        {/* Amount */}

        <div className="form-control w-full max-w-xs">
          <label  className="text-md font-medium tracking-wider capitalize" >Amount</label>
        </div>
        <select  id="amount" className="select  mb-10 mt-6 z-20 border border-gray-500 selece-lg w-56" value={amount} onChange={handleAmount}>
        {generateAmountOptions(8)}

        </select>

        {/* Cart BTN */}
        <div className="mt-10">
          <button className="btn btn-ghost text-white bg-black btn-md hover:text-black " onClick={()=> console.log("add to bag")}>
            Add to bag
          </button>
        </div>
      </div>


      </div>

    
          </section>
  );
};

export default SingleProduct;
