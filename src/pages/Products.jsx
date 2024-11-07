import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { fetchCollectionsData } from "../utils";
import { all } from "axios";






export const loader = async () => {
  try {
    const allproducts = await fetchCollectionsData(['Hats','Jeans','Dresses', 'sweaters' ])

      const  products = Object.values(allproducts).flat();
      const brandNames = [...new Set(products.map(product => product.brandName))];
      console.log(brandNames)



   

    return { allproducts,brandNames  }; // Return products for useLoaderData

   
    
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Failed to load products", { status: 500 });
  }


};





const Products = () => {


  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products;