const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N8Y39BjUsgOzO6MElWYB1b1OBhyv1NTPM8tw6clCM8lV0APmgOPWiozBE8WJYYlzgIoZFMqqQ9XO9YntM3q3JD800RsEOIAZ9"
);

//Setting up the API

//configure the app
const app = express();

//setup a middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for an amount of ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - PaymentIntent Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
