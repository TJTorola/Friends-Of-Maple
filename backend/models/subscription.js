const Stripe = require('../stripe.js');

/**
 * @typedef {Object} Subscription
 * @property {string} id
 * @property {string} planId
 * @property {string} status
 * @property {string} createdAt
 * @property {string} nextBill
 */

/**
 * @typedef {Object} NewSubscriptionPayload
 * @property {string} customerId
 * @property {string} planId
 */

/**
 * @param {NewSubscriptionPayload} payload
 * @return {Subscription}
 */
const newSubscription = (payload) => (
  Stripe.subscriptions.create({
    customer: payload.customerId,
    plan: payload.planId,
  })
);

module.exports = {
  newSubscription,
};
