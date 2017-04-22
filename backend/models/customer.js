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
 * @property {string} cardToken         - !""
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
const new = (payload) => {

}
