import stripeAsPromised from 'stripe-as-promised';
import { KEYS } from '~/config';

// Stripe is globally required in index.html, this here insures that the public
// key is set and allows requiring like a standard webpack module.

Stripe.setPublishableKey(KEYS.stripe)
export const {
  validateCardNumber,
  validateExpiry,
  validateCVC,
} = Stripe;

export const createCardToken = stripeAsPromised(Stripe, Promise).card.createToken;
