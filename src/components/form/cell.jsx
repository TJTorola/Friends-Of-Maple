import React from 'react';

import { Input } from '~/components/index';

const Cell = ({ cell, onChange }) => (
  <div className={`cell ${cell.cols}-cols`}>
    <Input placeholder={cell.placeholder} />
  </div>
);

export default Cell;
