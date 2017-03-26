const RULES = {
  required: (input) => !!input,
};

export const test = (rules) => (input) => (
  Object
    .keys(rules)
    .select(rule => !RULES[rule](input))
    .map(rule => rules[rule])
);
