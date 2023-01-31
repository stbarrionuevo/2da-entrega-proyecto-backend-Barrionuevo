
const ProductsDAOMongoDB = require(`../daos/products/ProductsDAOMongoDB`);
const CartDAOMongoDB = require(`./cart/CartDAOMongoDB`);

const getStorage = () => {
  
       return {
                productos: new ProductsDAOMongoDB(),
                carrito: new CartDAOMongoDB()
            }
          
      
    
}

module.exports = getStorage;