import React from 'react';

import Gear from '~/components/gear';
import Tree from '~/components/tree';

const Processing = () => (
  <div className="processing">
    <Tree />
    <div className="content">
      <Gear />
      <h2>Processing...</h2>
    </div>
  </div>
);

export default Processing;
