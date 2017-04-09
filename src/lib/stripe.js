import { KEYS } from '~/config';

// Stripe is globally required in index.html, this here insures that the public
// key is set and allows requiring like a standard webpack module.

Stripe.setPublishableKey(KEYS.stripe)
export default Stripe;
