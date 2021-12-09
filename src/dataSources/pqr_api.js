const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PqrAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.pqr_api_url;
    }

    async createPQR(pqr) {
        pqr = new Object(JSON.parse(JSON.stringify(pqr)));
        return await this.post(`/pqr/`, pqr);
    }

    async getAccount(pqr) {
        pqr = new Object(JSON.parse(JSON.stringify(pqr)));
        return await this.get(`/pqr/`);
    }
}

module.exports = PqrAPI;