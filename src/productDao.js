const fs = require("fs");

const getProducts = function (done) {
  fs.readFile("src/products.json", (err, fileContent) => {
    if (err) {
      done("Encountered error while getting products details");
    } else {
      const productData = JSON.parse(fileContent);
      done(undefined, productData);
    }
  });
};

const getProductById = function (id, done) {
  fs.readFile("src/products.json", (err, fileContent) => {
    if (err) {
      done("Encountered error while getting products details");
    } else {
      const productData = JSON.parse(fileContent);
      const fetchedProduct = productData.find((prd) => prd.id == id);
      if (fetchedProduct === undefined) {
        done("No product data");
      } else {
        done(undefined, fetchedProduct);
      }
    }
  });
};

const saveProductDetails = function (ProductDetails, done) {
  fs.readFile("src/products.json", (err, fileContent) => {
    if (err) {
      done("Encountered error while getting products details");
    } else {
      let productsData = JSON.parse(fileContent);

      productsData.push(ProductDetails);
      fs.writeFile(
        "src/products.json",
        JSON.stringify(productsData, null, 2),
        (err) => {
          if (err) {
            done("Encountered error while saving product details");
          } else {
            done(undefined, ProductDetails);
          }
        }
      );
    }
  });
};

const deleteProductById = function (productId, done) {
  fs.readFile("src/products.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting products details");
    } else {
      try {
        let productsData = JSON.parse(fileContent);

        const index = productsData.findIndex(
          (product) => product.id === productId
        );

        if (index === -1) {
          return done("Product not found");
        }

        productsData.splice(index, 1);

        fs.writeFile(
          "src/products.json",
          JSON.stringify(productsData, null, 2),
          (err) => {
            if (err) {
              return done("Encountered error while saving product details");
            } else {
              return done(undefined, productsData);
            }
          }
        );
      } catch (error) {
        return done("Error parsing product details");
      }
    }
  });
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
