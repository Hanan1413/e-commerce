import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  NewArrival,
} from "./pages";

import ProductList from "./components/ProductList";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { singleProductLoader } from "./utils";
import {loader as productsLoader} from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },

      {
        path: "products/:collectionName/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "newarrival", element: <NewArrival /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
