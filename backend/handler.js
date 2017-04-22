'use strict';
const { endpoint } = require('./util');
const { badRequest } = require('./error');

const postSubscription = ({ newCustomerPayload }, respond) => {
  if (!newCustomerPayload) { throw badRequest('Customer data required'); }

  respond('win');
}

module.exports = {
  postSubscription: endpoint(postSubscription)
}
