import React from 'react';
import cx from 'classnames';

import { Input } from '~/components/index';

const Cell = ({
  cell: {
    cols,
    placeholder,
    type,
  },
  onChange,
  isLast,
}) => (
  <div className={classnames(isLast, cols)}>
    <Input placeholder={placeholder} type={type} />
  </div>
);

const classnames = (isLast, cols) => cx(
  `cols-${cols}`,
  'cell',
  { 'is-last': isLast },
);

export default Cell;
