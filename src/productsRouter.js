const express = require("express");
const router = express.Router();

const productsController = require("./productsController");

router.get("/", (req, res) => {
  try {
    productsController.getProducts((err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send({ STATUS: "OK", data: result });
      }
    });
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});

router.get("/:productId", (req, res) => {
  try {
    const productId = req.params.productId;
    productsController.getProductById(productId, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send({ STATUS: "OK", data: result });
      }
    });
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});

router.post("/", (req, res) => {
  try {
    const productDetails = req.body;

    if (!productDetails || Object.keys(productDetails).length === 0) {
      return res.status(400).send("Product details are required");
    }

    productsController.saveProductDetails(
      productDetails,
      (err, savedProduct) => {
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.status(201).send({ STATUS: "OK", data: savedProduct });
        }
      }
    );
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});

router.delete("/:productId", (req, res) => {
  try {
    const productId = req.params.productId;

    productsController.deleteProductById(productId, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send({ STATUS: "OK", data: result });
      }
    });
  } catch (err) {
    return res.status(400).send("Error deleting product");
  }
});

module.exports = router;
