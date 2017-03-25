import React from 'react';

const Row = ({ row, onChange }) => (
  <div className="row">
    row.map(mCell(onChange))
  </div>
);

const mCell = (onChange) => (cell, idx) => (
  <Cell key={idx} cell={cell} onChange={onChange} />
);

export default Row;