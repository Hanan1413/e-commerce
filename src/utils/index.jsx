import axios from 'axios';
import { db } from '../firebase/firebase';
import { collection, getDocs,  doc, getDoc } from 'firebase/firestore';

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

// ProductsLoader
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

export const formatPrice = (price) =>{
    const dollarsAmount = new Intl.NumberFormat('en-SA',{
        style:'currency',
        currency: 'SAR'
    }).format((price/100).toFixed(2));

    return dollarsAmount;
};






// singleProductLoader function
export const singleProductLoader = async ({ params }) => {
    const { collectionName, id: productId } = params; // Extract collection name and product ID
    // const docRef = db.collection(collectionName).doc(productId);

    const docRef = doc(db, collectionName, productId)
    console.log("Fetching Product...");
    console.log("Collection Name:", collectionName);
    console.log("Product ID:", productId);
  
    try {
        const doc = await getDoc(docRef)
      
        if (doc.exists) {
          return { product: doc.data() }; // Return the product data
        } else {
          throw new Response('Product not found', { status: 404 });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        throw new Response('Error fetching product', { status: 500 });
      }
    };
  

    // funciotn  to create arrays of number 
  
    export const generateAmountOptions = (number) =>{
        return Array.from({length:number}, (_, index) =>{
            const amount = index + 1
            return (
                <option value={amount} key={amount} >
                    {amount}
                </option>
            )
        })
    }




// Loader function to fetch data
export const productsLoader = async () => {
  try {
    const collectionNames = ['Hats', 'Jeans', 'Dresses', 'Sweaters']; // Correct collection names
    const data = await fetchCollectionsData(collectionNames); // Fetch products data
    console.log(data); // Check data format (you can remove this after checking)
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products");
  }
}