import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Body from "./Components/Body/Body";
import Error from "./Components/Error/Error";
import RestuarantMenu from "./Components/RestuarantMenu/RestuarantMenu";
import Cart from "./Components/Cart/Cart";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, // Home or main content
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
        path: "/restuarant/:resid",
        element: <RestuarantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRoutes;
