import React from 'react';

import Cell from './cell';

const Form = ({ form, onChange }) => (
  <div className="Form">
    { form.map(mRow(onChange)) }
  </div>
);

const mRow = (onChange) => (row, idx) => (
  <Row key={idx} row={row} onChange={onChange} />
);

const Row = ({ row, onChange }) => (
  <div className="row">
    { row.map(mCell(onChange)) }
  </div>
);

const mCell = (onChange) => (cell, idx, { length }) => (
  <Cell key={idx} cell={cell} onChange={onChange} isLast={idx === length - 1} />
);

export default Form;
