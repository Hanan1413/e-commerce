import axios from 'axios';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const ProductionUrl = 'https://strapi-store-server.onrender.com/api';

export const customeFetch = axios.create({
    baseURL: ProductionUrl,
    
})

// Fetch single collection data

export const fetchCollectionData = async (collecitonNme) =>{
    try{
        const querySnapshot = await  getDocs(collection(db, collecitonNme));
        const data = querySnapshot.docs.map(doc =>({
            id: doc.id,  //get the doc id
            ...doc.data() //spread the document data

        }))

        return data;


    } catch(error){
        console.log("Error fetching data", error )
        throw error;

    }
}


//Fetch all collections data


export const fetchCollectionsData = async (collectionNames) => {
    try {
        const allData = {};

        await Promise.all(
            collectionNames.map(async (collectionName) => {
                const querySnapshot = await getDocs(collection(db, collectionName));
                allData[collectionName] = querySnapshot.docs.map(doc => ({
                    id: doc.id, // Get the document ID
                    ...doc.data() // Spread the document data
                }));
            })
        );

        return allData;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error; // Re-throw the error to handle it in the component
    }
};

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
