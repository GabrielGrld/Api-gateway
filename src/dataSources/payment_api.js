const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PaymentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.payment_api_url;
    }

    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post(`/accounts/`, account);
    }

    async getAccount(username) {
        return await this.get(`/accounts/${username}/`);
    }

    async paymentRequest(payment) {
        payment = new Object(JSON.parse(JSON.stringify(payment)));
        return await this.post(`/transactions/`, payment);
    }

    async paymentsByUsername(username) {
        return await this.get(`/transactions/${username}/`);
    }
}

module.exports = PaymentAPI;