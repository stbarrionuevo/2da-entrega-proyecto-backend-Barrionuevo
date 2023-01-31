const { Router } = require("express");

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
} = require("../controller/productsController");

const productsRouter = Router();

productsRouter.get(`/`, getAllProducts);
productsRouter.get(`/:id`, getProductById);
productsRouter.post(`/`, addProduct);
productsRouter.put(`/:id`, updateProductById);
productsRouter.delete(`/:id`, deleteProductById);

module.exports = productsRouter;