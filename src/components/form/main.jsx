import React from 'react';

import Row from './row';

const Form = ({ form, onChange }) => (
  <div className="Form">
    { form.map(mRow(onChange)) }
  </div>
);

const mRow = (onChange) => (row, idx) => (
  <Row key={idx} row={row} onChange={onChange} />
);

export default Form;
