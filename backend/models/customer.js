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
 * @property {string} country
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
 * @property {string} country
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
    country,
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
    country,
    zipCode,
    city,
    state,
  };

  return Stripe.customers.create({
    email,
    source,
    metadata,
  }).then(sCustomer => ({
    id: sCustomer.id,
    cardId: sCustomer.sources.data[0].id,
    email: sCustomer.email,
    firstName: sCustomer.metadata.firstName,
    lastName: sCustomer.metadata.lastName,
    phoneNumber: sCustomer.metadata.phoneNumber,
    address: sCustomer.metadata.address,
    country: sCustomer.metadata.country,
    zipCode: sCustomer.metadata.zipCode,
    city: sCustomer.metadata.city,
    state: sCustomer.metadata.state,
  }));
}

module.exports = {
  newCustomer,
};
