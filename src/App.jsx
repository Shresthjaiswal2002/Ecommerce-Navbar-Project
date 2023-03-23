import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Products from "./pages/Products";
// import { productLoader } from "./pages/Product";
// import { productsLoader } from "./pages/Products";
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<RootLayout />} path="/">
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
                path="/products"
                element={<Products />} 
                // loader={productsLoader}
            />
            <Route
                path="/products/:id"
                element={<Product />}
                // loader={productLoader}
            />
        </Route>
  )
);

function App() {
  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;