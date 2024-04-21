import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./src/Component/HeaderNavigationComponents/Header";
import Body from "./src/Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./src/Component/HeaderNavigationComponents/ContactUs";
import Error from "./src/Component/Shared/Error";
import RestaurantMenu from "./src/Component/Restaurant/RestaurantMenu";
import Product from "./src/Component/Product";
import UserContext from "./src/Utils/UserContext";

const About = lazy(() =>
  import("./src/Component/HeaderNavigationComponents/About")
);

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Balamani Venugopal");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
