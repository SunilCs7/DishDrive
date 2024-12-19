import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Body from "./Components/Body/Body";
import Error from "./Components/Error/Error";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Handle errors for this route
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
    ],
  },
]);

export default appRoutes;
