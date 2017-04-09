import Stripe from '~/lib/stripe';

const RULES = {
  required: (input) => !!input,
  validCCNum: Stripe.validateCardNumber,
  validCCExp: Stripe.validateExpiry,
  validCCCVC: Stripe.validateCVC,
};

const test = (rules, input) => (
  Object
    .keys(rules)
    .filter(rule => !RULES[rule](input))
    .map(rule => rules[rule])
);

export const testForm = (inputs, fields) => (
  Object
    .keys(inputs)
    .reduce((errs, inputKey) => {
      const field = fields[inputKey];
      const rules = field && field.rules;
      const inputErrs = rules && test(rules, inputs[inputKey]);

      return (inputErrs && inputErrs.length > 0)
        ? Object.assign(errs, { [inputKey]: inputErrs })
        : errs
    }, {})
);

export const mapFormGrid = ({ grid, fields }) => (
  grid.map(row => (
    row.map(cell => (
      Object.assign({}, {
        field: fields[cell.field],
        cols: cell.cols,
      })
    ))
  ))
);
