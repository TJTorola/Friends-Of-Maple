import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import {
  AMOUNT_PAGE,
  INFO_PAGE,
  PAYMENT_PAGE,
} from '~/reducers/nav';

const Nav = ({ nav }) => (
  <div className="nav">
    <div className={cx("step", {"is-active": (nav === AMOUNT_PAGE) })}>
      Amount
    </div>
    <div className={cx("step", {"is-active": (nav === INFO_PAGE) })}>
      Information
    </div>
    <div className={cx("step", {"is-active": (nav === PAYMENT_PAGE) })}>
      Payment
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps, null)(Nav);
