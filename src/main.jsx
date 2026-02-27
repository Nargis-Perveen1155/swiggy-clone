
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantCont from "./Components/RestaurantCont.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import RestaurantPage from "./Components/RestaurantPage.jsx";
// import { useRouteError } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.jsx";
import AddOns from "./Components/AddOns.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <RestaurantCont />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantPage/>
      },
      {
        path:"/addons",
        element:<AddOns/>
      }
     

    ],

  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />,
);
