import React from 'react';

import Cell from './cell';
import { mapFormGrid } from '~/config';

const Form = ({ form }) => (
  <div className="Form">
    { mapFormGrid(form).map(mRow) }
  </div>
);

const mRow = (row, idx) => (
  <Row key={idx} row={row} />
);

const Row = ({ row }) => (
  <div className="row">
    { row.map(mCell) }
  </div>
);

const mCell = (cell, idx, { length }) => (
  <Cell key={idx} cell={cell} isLast={idx === length - 1} />
);

export default Form;
