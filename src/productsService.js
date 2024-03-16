const { pipeline } = require("supertest/lib/test");
const productDAO = require("./productDao");

//import the DAO layer

const getProducts = function (done) {
  //call dao getproducts method and pass the parameter
  productDAO.getProducts(done);
};

const getProductById = function (id, done) {
  //call dao getProductById method and pass the parameter
  productDAO.getProductById(id, done);
};
const saveProductDetails = function (productDetails, done) {
  //call dao saveProductDetails method and pass the parameter
  productDAO.saveProductDetails(productDetails, done);
};

const deleteProductById = (productId, done) => {
  //call dao deleteProductById method and pass the parameter
  productDAO.deleteProductById(productId, done)
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById,
};
