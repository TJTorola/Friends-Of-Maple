import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { setNavigation } from '~/actions/index';

const Step = ({ nav, setNav, step }) => (
  <div
    onClick={() => setNav(step.nav)}
    className={classnames(nav === step.nav)}
  >
    {step.printable}
  </div>
);

const classnames = (isSelected) => cx({
  'step': true,
  'is-selected': isSelected,
});

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const mapDispatchToProps = (dispatch) => ({
  setNav: (location) => dispatch(setNavigation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
