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
const new = (payload) => {

};

/**
 * @param {string} subscriptionId
 * @return {Subscription}
 */
const get = (subscriptionId) => {

};

/**
 * @param {string} subscriptionId
 * @return {boolean}
 */
const cancel = (subscriptionId) => {

};
