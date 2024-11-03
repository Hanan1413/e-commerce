
import { db } from "./firebase/firebase"; // Ensure this imports your Firebase config
import { setDoc } from "firebase/firestore"; // Import necessary Firestore methods
import { collection, addDoc } from "firebase/firestore"; // Ensure `collection` and `addDoc` are imported


const products = [
  // Dress Category
  {
    title: "Dress",
    brandName: "DESIGN",
    description: "DESIGN roll neck mini dress in khaki",
    category: "Dresses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/DESIGN%20roll%20neck%20mini%20dress%20in%20khaki.avif?alt=media&token=2a60364e-f451-4890-ae5e-1efc87dcc269",
    price: 10999,
    colors: ["#6B8E23"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Dress",
    brandName: "Threadbare",
    description: "Threadbare roll neck oversized maxi jumper dress in grey",
    category: "Dresses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/Threadbare%20roll%20neck%20oversized%20maxi%20jumper%20dress%20in%20grey.avif?alt=media&token=174d1e76-87da-4956-ade8-c3c19ad2c4de",
    price: 12999,
    colors: ["#808080"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Dress",
    brandName: "YAS",
    description:
      "YAS high neck knitted jumper midi dress in black with contrast stitch",
    category: "Dresses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/YAS%20high%20neck%20knitted%20jumper%20midi%20dress%20in%20black%20with%20contrast%20stitch.avif?alt=media&token=0c1b613f-d2e1-4406-a6d2-7a66b05ebcc8",
    price: 14999,
    colors: ["#000000"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },

  // Hat Category
  {
    title: "Hat",
    brandName: "Threadbare",
    description: "Threadbare pieces teddy bucket hat in black",
    category: "Hats",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/pieces-teddy-bucket-hat-in-black_IMGCentury.jpg?alt=media&token=376886af-0b23-4215-a4e7-d2fa6eef4b56",
    price: 4999,
    colors: ["#000000"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Hat",
    brandName: "New Look",
    description: "New Look faux fur bucket hat in brown",
    category: "Hats",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/New%20Look%20faux%20fur%20bucket%20hat%20in%20brown.avif?alt=media&token=25be9828-8b1a-4b49-95f6-a778b210f1f4",
    price: 5999,
    colors: ["#8B4513"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Hat",
    brandName: "Glamorous",
    description: "Glamorous textured bucket hat in burgundy",
    category: "Hats",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/Glamorous%20textured%20bucket%20hat%20in%20burgundy_IMGCentury%20(1).jpg?alt=media&token=0108a368-049a-47cf-a364-5e0c93a55dd6",
    price: 6999,
    colors: ["#800020"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },

  // Jeans Category
  {
    title: "Jeans",
    brandName: "MBLUE",
    description: "Baggy jeans with boxer waistband in mid blue",
    category: "Jeans",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/baggy%20jeans%20with%20boxer%20waistband%20in%20mid%20blue%20-%20MBLUE.avif?alt=media&token=67818ab1-1dda-4149-a485-09baca59217b",
    price: 12999,
    colors: ["#3366CC"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Jeans",
    brandName: "Petite",
    description: "Petite slim fit comfort mom jeans in mid blue",
    category: "Jeans",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/Petite%20slim%20fit%20comfort%20mom%20jeans%20in%20mid%20blue.png?alt=media&token=4ee622a1-6d1a-44a1-9c6c-d0b5eb89bd50",
    price: 11999,
    colors: ["#3366CC"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Jeans",
    brandName: "Comfort",
    description: "Cropped comfort stretch straight leg jeans in light mid blue",
    category: "Jeans",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/croppedcomfortstretchstraightlegjeaninlightmidbluesameasthis.avif?alt=media&token=ac7018e3-2d1b-4bb2-80b2-de10713e4b89",
    price: 10999,
    colors: ["#ADD8E6"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },

  // Jackets Category
  {
    title: "Jacket",
    brandName: "Barbour",
    description:
      "jacket with long sleeves. Side pockets. Concealed hook fastening at the front",
    category: "Jackets",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/barbour.avif?alt=media&token=2b1058b4-308f-443f-a750-d5ecd36e1047",
    price: 15999,
    colors: ["#000000"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Jacket",
    brandName: "Zara",
    description:
      "Featuring zipped side pockets concealed in the seam, an adjustable hem with elasticated drawstrings and stoppers, lining and a zip-up front",
    category: "Jackets",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/black-jacket.avif?alt=media&token=5f65204b-0785-4ce3-929b-97666b30c248",
    price: 14999,
    colors: ["#000000"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
  {
    title: "Jacket",
    brandName: "Denim",
    description: "Denim multi pocket jacket in mid blue",
    category: "Jackets",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-ecommerceapp.appspot.com/o/denim%20multi%20pocket%20jacket%20in%20mid%20blue.avif?alt=media&token=46c698e8-2c66-4c53-b0f0-8af911024194",
    price: 13999,
    colors: ["#3366CC"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    shipping: true,
  },
];
const addProductsToFirestore = async (products) => {
  console.log("Starting to add products to Firestore...");
  const productsCollectionRef = collection(db, 'products');

  for (const product of products) {
    try {

      const productRef = await setDoc(productsCollectionRef, product);
      console.log("Document written with ID: ", productRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  console.log("Finished adding products.");
};




// Call the function to add products
addProductsToFirestore(products);
console.log(products);
