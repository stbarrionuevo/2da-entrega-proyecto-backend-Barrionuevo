const mongoDB = require(`../../dataBase/options/mongoDB`);
const productsModel = require(`../../dataBase/models/producto`);

const CrudMongoDB = require(`../../dataBase/crudMongoDB/crudProducts`);

class ProductsDAOMongoDB extends CrudMongoDB {
    constructor() {
        super(mongoDB, productsModel);
    };
};

module.exports = ProductsDAOMongoDB;