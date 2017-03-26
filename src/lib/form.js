const RULES = {
  required: (input) => !!input,
};

const test = (rules, input) => (
  Object
    .keys(rules)
    .select(rule => !RULES[rule](input))
    .map(rule => rules[rule])
);

export const testForm = (inputs, fields) => (
  Object
    .keys(inputs)
    .reduce((errs, inputKey) => (
      (const rules = fields[inputKey] && fields[inputKey].rules)
        ? [...errs, ...test(rules, inputs[valueKey])]
        : errs
    ), [])
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
