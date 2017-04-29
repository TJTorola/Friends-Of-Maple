import stripeAsPromised from 'stripe-as-promised';

// Stripe is globally required in index.html, this here insures that the public
// key is set and allows requiring like a standard webpack module.

Stripe.setPublishableKey(ENV.stripePublicKey)
export const {
  validateCardNumber,
  validateExpiry,
  validateCVC,
} = Stripe;

export const createCardToken = stripeAsPromised(Stripe, Promise).card.createToken;
