import React from 'react';
import cx from 'classnames';

import { Input } from '~/components/index';

const Cell = ({ cell, onChange, isLast }) => (
  <div className={classnames(isLast, cell.cols)}>
    <Input placeholder={cell.placeholder} />
  </div>
);

const classnames = (isLast, cols) => cx(
  `cols-${cols}`,
  'cell',
  { 'is-last': isLast },
);

export default Cell;
