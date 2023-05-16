import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import AddItem from "./components/Alert/addItem";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: "basket", element: <Basket /> },
        { path: "payment", element: <Payment /> },
      ],
    },

    { path: "login", element: <Login /> },
  ]);

  return (
    <>
      <AddItem />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
