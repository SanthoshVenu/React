import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/Component/HeaderNavigationComponents/Header";
import Body from "./src/Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Component/HeaderNavigationComponents/About";
import ContactUs from "./src/Component/HeaderNavigationComponents/ContactUs";
import Error from "./src/Component/Shared/Error";

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
