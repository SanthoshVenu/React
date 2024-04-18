import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Header from "./src/Component/HeaderNavigationComponents/Header";
import Body from "./src/Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./src/Component/HeaderNavigationComponents/ContactUs";
import Error from "./src/Component/Shared/Error";
import RestaurantMenu from "./src/Component/Restaurant/RestaurantMenu";
import Product from "./src/Component/Product";

const About = lazy(() =>
  import("./src/Component/HeaderNavigationComponents/About")
);

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
