const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PaymentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://ts-payment-ms.herokuapp.com';
    }
 
    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post(`/accounts/`, account);
    }

    async accountDetailByUsername(username) {
        const response = await this.get(`/accounts/${username}`);
        console.log("Esto es AccountDetailByUsername en pay_API, devuelve  Esta correcto");
        console.log(response);
        return await this.get(`/accounts/${username}`);
    }

    async createPayment(payment) {
        payment = new Object(JSON.parse(JSON.stringify(payment)));
        return await this.post(`/transactions/`, payment);
    }

    async paymentsByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
    

      accountReducer(account){
          return{
              username: account.username,
              balance: account.balance,
              lastChange: account.lastChange
          };
      }





}
 






module.exports = PaymentAPI;