import React from 'react';

import Text from './text';
import Select from './select';

import { STATES } from '~/data';

const Input = (props) => {
  switch (props.type) {
    case 'stateSelect':
      return <Select options={STATES} {...props} />
    default:
      return <Text {...props} />;
  }
}

export default Input;
