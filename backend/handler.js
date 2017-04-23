'use strict';
const { endpoint } = require('./util');
const { badRequest, stripeError } = require('./error');
const { newCustomer } = require('./models/customer');

const postSubscription = ({ body }, respond, reject) => {
  if (!body.newCustomerPayload) { throw badRequest('Customer data required'); }
  newCustomer(body.newCustomerPayload)
    .then(respond)
    .catch(err => {
      reject(stripeError(err));
    });
}

module.exports = {
  postSubscription: endpoint(postSubscription)
}
