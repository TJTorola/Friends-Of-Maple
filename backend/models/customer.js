const Stripe = require('../stripe.js');

/**
 * @typedef {Object} Customer
 * @property {string} id
 * @property {string} cardId
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} phoneNumber
 * @property {string} address
 * @property {string} zipCode
 * @property {string} city
 * @property {string} state
 */

/**
 * @typedef {Object} NewCustomerPayload
 * @property {string} source            - !""
 * @property {string} email             - !""
 * @property {string} firstName         - !""
 * @property {string} lastName          - !""
 * @property {string} phoneNumber
 * @property {string} address
 * @property {string} zipCode
 * @property {string} city
 * @property {string} state
 */

/**
 * @param {NewCustomerPayload} payload
 * @return {Promise.<Customer, FomError>}
 */
const newCustomer = (payload) => {
  const {
    source,
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    zipCode,
    city,
    state,
  } = payload;

  const metadata = {
    firstName,
    lastName,
    phoneNumber,
    address,
    zipCode,
    city,
    state,
  };

  return Stripe.customers.create({
    email,
    source,
    metadata,
  });
}

module.exports = {
  newCustomer,
};
