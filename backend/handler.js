'use strict';
const { endpoint } = require('./util');
const { badRequest, stripeError } = require('./error');
const { newCustomer } = require('./models/customer');
const { newSubscription } = require('./models/subscription');

const postSubscription = ({ body }, respond, reject) => {
  if (!body.newCustomerPayload) { throw badRequest('Customer data required'); }
  if (!body.planId) { throw badRequest('PlanId required'); }

  newCustomer(body.newCustomerPayload)
    .then(customer => (
      newSubscription({
        customerId: customer.id,
        planId: body.planId,
      })
    )).then(subscription => {
      respond(subscription.id);
    }).catch(err => {
      reject(stripeError(err));
    });
}

module.exports = {
  postSubscription: endpoint(postSubscription)
}
