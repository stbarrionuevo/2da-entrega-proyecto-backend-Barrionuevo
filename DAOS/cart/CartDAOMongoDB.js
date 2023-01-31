const mongoDB = require(`../../dataBase/options/mongoDB`);

const cartModel = require(`../..dataBase/models/cart`);

const productsModel = require(`../../dataBase/models/product`)


const CrudMongoDB = require(`../../dataBase/crudMongoDB/crudCarts`);

class CartDAOMongoDB extends CrudMongoDB {
    constructor(){
        super(mongoDB, cartModel, productsModel)
    };
};

module.exports = CartDAOMongoDB;