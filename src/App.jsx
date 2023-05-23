import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import AddItem from "./components/Alert/addItem";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Order from "./components/Order/Order";

const stripePromise = loadStripe(
  "pk_test_51N8Y39BjUsgOzO6MJ0SY3Dc6plJY87QRWMKOF7l9aiGlUHfZmhYUSnZOUTNWfH2MzTAagskzbSedUMm09fhWZmSk00Hy7CIp9m"
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: "basket", element: <Basket /> },
        {
          path: "payment",
          element: (
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          ),
        },
        { path: "order", element: <Order /> },
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
