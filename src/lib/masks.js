import { toPattern } from 'vanilla-masker';

const mask = (pattern) => (input) => toPattern(input, pattern);

export const toPhone = mask("(999) 999-9999");
export const toZip = mask("99999-9999")
export const toCardNumber = (input) => (
  (input.startsWith('34') || input.startsWith('37'))
    ? toPattern(input, '9999 999999 99999')
    : toPattern(input, '9999 9999 9999 9999')
);
export const toExperation = mask("99/99");
export const toCsc = mask("9999");
