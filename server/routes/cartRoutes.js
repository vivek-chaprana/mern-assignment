const express = require("express");
const Cart = require("../model/cartModel");

const router = express.Router();

router.post("/api/cart", (req, res) => {
  const { items } = req.body;

  // Create a new cart document
  const cart = new Cart({ items });

  // Save the cart to the database
  cart
    .save()
    .then(() => {
      res.status(200).json({ message: "Cart saved successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Error saving cart", details: err });
    });
});

// Retrieve cart data from MongoDB
app.get("/api/cart", (req, res) => {
  Cart.find()
    .then((carts) => {
      res.status(200).json(carts);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error retrieving carts", details: err });
    });
});

module.exports = router;
