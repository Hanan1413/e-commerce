import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase"; // Import your Firebase config
import { collection, getDocs } from "firebase/firestore";
import { fetchCollectionData } from "../utils"; 
import {fetchCollectionsData} from "../utils";



//chat gtp 
// https://chatgpt.com/c/67230a45-b244-8000-b614-c35439fff603

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling




useEffect(() =>{
  const getProducts = async () => {
    try {
      const data = await fetchCollectionsData(['Hats','Jeans','Dresses', 'sweaters' ]);
      console.log(data)
      setProducts(data);

    } catch (error) {
        setError(error.message);
    }

    setLoading(false)
  };

  getProducts();
}, [])

  // const fetchProducts = async () => {
    // try {
    //   const querySnapshot = await getDocs(collection(db, "Hats")); // Fetch data from Firestore
    //   const productsData = querySnapshot.docs.map((doc) => ({
    //     id: doc.id, // Firebase-generated document ID
    //     ...doc.data(), // Spread the document data
    //   }));
  //     setProducts(productsData); // Update state with fetched products
  //     console.log(productsData); // Log data to check structure
  //   } catch (err) {
  //     setError("Failed to fetch products: " + err.message); // Handle errors
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts(); // Fetch products on component mount
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products</h1>

      {Object.entries(products).map(([collectionName, products]) => (
                <div key={collectionName}>
                    <h2>{collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}</h2>
                    <div>
                        {products.map(product => (
                          <>
                          <img src={product.image} alt="" width={200}  loading="lazy"/>
                          <p>{product.description}</p>

                          <p>{product.title}</p>
                          {/* <p>{product.colors}</p> */}

                          
                          </>
                            
                        ))}
                    </div>
                </div>
            ))}

      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.company}
            {product.description}
            <img src={product.image} alt={product.title} />
            (Price: {product.price})
            {/* Adjust according to your data structure */}
          {/* </li>
        ))}
      </ul>  */}


    </div>
  );
};

export default ProductList;
