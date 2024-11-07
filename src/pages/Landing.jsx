
import { fetchCollectionsData } from '../utils';
import { FeaturedProducts, Hero } from "../components";


// fetchCollectionsData()

export const loader = async () => {
  try {
    const allproducts = await fetchCollectionsData(['Hats','Jeans','Dresses', 'sweaters' ])

    console.log(allproducts)

    return { allproducts }; // Return products for useLoaderData
   
    
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Failed to load products", { status: 500 });
  }




};

const Landing = () => {
  return (
    <>
    <Hero/>
    <FeaturedProducts />
    </>
  );
};
export default Landing;
