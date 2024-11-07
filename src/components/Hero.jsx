import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import fashion from "../assets/fashion-man.png";
import LazyLoad from "react-lazyload";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center text-center lg:text-left">
    <div>
      <h1 className="text-4xl font-bold tracking-tight  header-font  text-black  sm:text-8xl  ">
        We’re changing the way people shop.
      </h1>

      <p className="mt-8 max-w-xl text-xl  leading-8 ">
        Discover our exclusive selection of finely tailored clothing, created
        to highlight your personal style and express your individuality.
      </p>
      <div className="mt-10 ">
        <Link to="products" className="btn btn-neutral bg-black ">
          Our Products
        </Link>
      </div>
    </div>
    <div className="  p-4 space-x-4  rounded-box">
      <LazyLoad>
        <img src={fashion} alt={fashion} />
      </LazyLoad>
    </div>
  </div>
  )
}

export default Hero
