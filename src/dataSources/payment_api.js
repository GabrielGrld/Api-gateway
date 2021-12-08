const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PaymentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.payment_api_url;
    }

    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/accounts/`, account);
    }

    async getAccount(username) {
        return await this.get(`/accounts/${username}/`);
    }

    async paymentRequest(payment) {
        payment = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/transactions/`, payment);
    }

    async paymentByUsername(username) {
        username = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/transactions/`, username);
    }
}

module.exports = PaymentAPI;