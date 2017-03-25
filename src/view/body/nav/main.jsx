import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { STEPS } from '~/config';
import Step from './step';

const Nav = () => (
  <div className="nav">
    {STEPS.map(mStep)}
  </div>
);

const mStep = (step, idx) => <Step key={idx} step={step} />;

export default Nav;
