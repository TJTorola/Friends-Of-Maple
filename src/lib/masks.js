import { toPattern } from 'vanilla-masker';

const mask = (pattern) => (input) => toPattern(input, pattern);

export const toPhone = mask("(999) 999-9999");
export const toZip = mask("99999-9999")
