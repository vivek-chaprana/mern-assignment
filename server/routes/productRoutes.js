const express = require("express");
const fs = require("fs");
const formidable = require("formidable");
const Product = require("../model/productModel");
const slugify = require("slugify");

const router = express.Router();

// Route for creating a new product
router.post("/create-product", (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Failed to process the request" });
      return;
    }

    const { name, description, price } = fields;
    const { image } = files;

    // Check if all required fields are present
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !image:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    // Create a new product object
    const newProduct = new Product({
      ...fields,
      slug: slugify(name),
    });

    if (image) {
      // Read the image file and set it as the data for the product
      newProduct.image.data = fs.readFileSync(image.filepath);
      newProduct.image.contentType = image.mimetype;
    }

    // Save the product to the database
    newProduct
      .save()
      .then(() => {
        res
          .status(201)
          .json({ message: "Product added successfully", newProduct });
      })
      .catch((err) => {
        res.status(500).json({ error: "Failed to add the product" });
      });
  });
});

// Route for getting all products
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find({})
      .select("-image") // Exclude the 'image' field from the response
      // .limit(6)
      .sort({ createdAt: -1 }); // Sort products by creation date in descending order
    res.status(200).send({
      success: true,
      message: "All products fetched successfully.",
      products,
    });
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "Error in getting products",
      error: error.message,
    });
  }
});

// Route for getting a product's photo
router.get("/product-photo/:pid", async (req, res) => {
  try {
    const product = await Product.findById(req.params.pid).select("image");
    if (product.image.data) {
      res.set("Content-type", product.image.contentType);
      return res.status(200).send(product.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
});

module.exports = router;
