const { Router } = require(`express`);

const {
  getAllProductsByIdCart,
  createCart,
  addProduct,
  deleteCartById,
  deleteProductById
} = require(`../controller/cartController`);

const cartRouter = Router();

cartRouter.get(`/:id/productos`, getAllProductsByIdCart);
cartRouter.post(`/`, createCart);
cartRouter.post(`/:idCar/:idProd`, addProduct);
cartRouter.delete(`/:id`, deleteCartById);
cartRouter.delete(`/:id/productos/:id_prod`, deleteProductById);

module.exports = cartRouter;
