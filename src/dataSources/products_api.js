const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.products_api_url;
    }

   
    async getProducts(product) {
        product = new Object(JSON.parse(JSON.stringify(product)));
        return await this.get(`/products/`);
    }
}

module.exports = ProductsAPI;